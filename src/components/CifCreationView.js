import { useState } from "react";
import { styles } from "../styles/AppStyles";
import { addToHistory } from "../utils/historyManager";

export default function CifCreationView() {
    const [region, setRegion] = useState("O");
    const [no_cif, setNoCif] = useState(1);
    const [acc_type, setAccType] = useState('PCIF');
    const [response, setCifResponse] = useState([]);
    const [cifLoading, setCifLoading] = useState(false);
    const [error, setError] = useState("");

    const handleCifSubmit = async (e) => {
        e.preventDefault();
        setCifLoading(true);
        setError("");

        const userToken = localStorage.getItem('userToken');
        try {
            const res = await fetch(`http://10.1.161:5050/create_cif`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${userToken}`,
                },
                body: JSON.stringify({
                    region: region,
                    no_cif: parseInt(no_cif, 10),
                    acc_type: acc_type,
                }),
            });

            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('userToken');
                    setError('Session expired or unauthorized. Please log in again.');
                    // In a real app, we might want to redirect to login here, 
                    // but we'll just show the error for now or need a callback.
                    window.location.reload(); // Simple way to force re-login check
                    return;
                }
                throw new Error(`API returned an error: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            setCifResponse(data);

            // Add to history
            addToHistory('CIF', {
                count: parseInt(no_cif, 10),
                region: region,
                type: acc_type,
                details: `${parseInt(no_cif, 10)} CIF(s) created in ${region}`
            });

        } catch (error) {
            console.error("Fetch error:", error);
            if (!error.message.includes('unauthorized')) {
                setCifResponse([{ res_data: JSON.stringify({ ERROR_DESCRIPTION: error.message }) }]);
            }
        } finally {
            setCifLoading(false);
        }
    };

    const downloadCsv = () => {
        if (!response || response.length === 0) {
            alert("No data to download.");
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,Customer Number\n";
        response.forEach((item) => {
            try {
                const parsedResData = JSON.parse(item.res_data);
                csvContent += `"${parsedResData.CUSTOMER_NUMBER || ""}"\n`;
            } catch (e) {
                console.error("CSV parse error:", e);
            }
        });

        const link = document.createElement("a");
        link.setAttribute("href", encodeURI(csvContent));
        link.setAttribute("download", "cif_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div style={styles.pageHeader}>
                <div>
                    <h1 style={styles.pageTitle}>CIF Creation</h1>
                    <p style={styles.pageSubtitle}>Generate Customer Information Files for testing</p>
                </div>
            </div>

            <div style={styles.formCard}>
                <div style={styles.formGrid}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Region</label>
                        <select value={region} onChange={(e) => setRegion(e.target.value)} style={styles.select}>
                            <option value="X">X - UAT</option>
                            <option value="O">O - UAT</option>
                            <option value="Y">Y - UAT</option>
                            <option value="Z">Z - UAT</option>
                            <option value="K">K - Pre-Prod</option>
                            <option value="J">J - Pre-Prod</option>
                            <option value="R1">R1 - Pre-Prod</option>
                            <option value="Y2">Y2 - Pre-Prod</option>
                            <option value="L">L - Pre-Prod</option>
                            <option value="C">C - Pre-Prod</option>
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Number of CIF</label>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={no_cif}
                            onChange={(e) => setNoCif(e.target.value)}
                            style={styles.input}
                            placeholder="Enter quantity (1-10)"
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Account Type</label>
                        <select value={acc_type} onChange={(e) => setAccType(e.target.value)} style={styles.select}>
                            <option value="PCIF">Personal CIF Creation</option>
                            <option value="NPCIF">Non-Personal CIF Creation</option>
                        </select>
                    </div>
                </div>

                {error && <div style={styles.errorMsg}>{error}</div>}

                <button onClick={handleCifSubmit} style={styles.primaryButton} disabled={cifLoading}>
                    {cifLoading ? "Generating..." : "Generate CIF Records"}
                </button>
            </div>

            {response && response.length > 0 && (
                <div style={styles.resultsCard}>
                    <div style={styles.resultsHeader}>
                        <h3 style={styles.resultsTitle}>Generated Records ({response.length})</h3>
                        <button onClick={downloadCsv} style={styles.downloadButton}>
                            Download CSV
                        </button>
                    </div>
                    <div style={styles.resultsList}>
                        {response.map((item, index) => {
                            try {
                                const parsedResData = JSON.parse(item.res_data);
                                return (
                                    <div key={index} style={styles.resultItem}>
                                        <div style={styles.resultNumber}>{index + 1}</div>
                                        <div style={styles.resultContent}>
                                            <span style={styles.resultLabel}>Customer Number:</span>
                                            <span style={styles.resultValue}>{parsedResData.CUSTOMER_NUMBER}
                                                {parsedResData.ERROR_DESCRIPTION && <p style={styles.errorText}><strong>Error:</strong> {parsedResData.ERROR_DESCRIPTION}</p>}
                                            </span>
                                        </div>
                                    </div>
                                );
                            } catch (e) {
                                return (
                                    <div key={index} style={{ ...styles.resultItem, borderLeft: "3px solid #f44336" }}>
                                        <span style={styles.errorText}>Error: {item.res_data}</span>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

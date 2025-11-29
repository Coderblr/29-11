import { useState } from "react";
import { styles } from "../styles/AppStyles";
import { addToHistory } from "../utils/historyManager";

export default function KccAccountView() {
    const [region, setRegion] = useState("O");
    const [cif, setCif] = useState("");
    const [prod_code, setProd_code] = useState("");
    const [acc_segment, setAcc_Segment] = useState("");
    const [no_acc, setNo_acc] = useState(1);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setResponse([]);

        const url = `http://10.1.161.199:5050/create_kcc/`;
        const userToken = localStorage.getItem('userToken');

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${userToken}`,
                },
                body: JSON.stringify({
                    region: region,
                    cif: cif,
                    p_code: prod_code,
                    seg_code: acc_segment,
                    no_acc: parseInt(no_acc, 10),
                }),
            });

            if (!res.ok) {
                throw new Error(
                    `API returned an error: ${res.status} ${res.statusText}`
                );
            }

            const data = await res.json();
            setResponse(data);

            // Add to history
            addToHistory('KCC Account', {
                count: parseInt(no_acc, 10),
                region: region,
                cif: cif,
                details: `${parseInt(no_acc, 10)} KCC Account(s) created for CIF ${cif}`
            });
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err.message);
            setResponse([
                { res_data: JSON.stringify({ ERROR_DESCRIPTION: err.message }) },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const downloadCsv = () => {
        if (!response || response.length === 0) {
            alert("No data to download.");
            return;
        }

        const headers = ["Region", "Customer Number", "Product Code", "Account Segment", "RRN", "Status", "Account Number"];
        let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";

        response.forEach((item) => {
            try {
                const parsedResData = JSON.parse(item.res_data);
                const row = [
                    parsedResData.REGION || "",
                    parsedResData.CUSTOMER_NUMBER || "",
                    parsedResData.PRODUCT_CODE || "",
                    parsedResData.ACCOUNT_SEGMENT_CODE || "",
                    item.RRN || "",
                    parsedResData.STATUS || "",
                    parsedResData.ACCOUNT_NUMBER || "",
                ].map((field) => `"${field}"`).join(",");
                csvContent += row + "\n";
            } catch (e) {
                console.error("Error parsing res_data for CSV:", e);
            }
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "kcc_account_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div style={styles.pageHeader}>
                <div>
                    <h1 style={styles.pageTitle}>Create KCC Account</h1>
                    <p style={styles.pageSubtitle}>Generate KCC accounts for testing</p>
                </div>
            </div>

            <div style={styles.formCard}>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGrid}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Region</label>
                            <select
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                style={styles.select}
                                required
                            >
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
                            <label style={styles.label}>CIF</label>
                            <input
                                type="text"
                                value={cif}
                                onChange={(e) => setCif(e.target.value)}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Product Code</label>
                            <input
                                type="text"
                                value={prod_code}
                                onChange={(e) => setProd_code(e.target.value)}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Account Segment</label>
                            <input
                                type="text"
                                value={acc_segment}
                                onChange={(e) => setAcc_Segment(e.target.value)}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>No. of Accounts</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={no_acc}
                                onChange={(e) => setNo_acc(e.target.value)}
                                style={styles.input}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" style={styles.primaryButton} disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>

            {(error || (response && response.length > 0)) && (
                <div style={styles.resultsCard}>
                    {error && <div style={styles.errorMsg}>{error}</div>}

                    {response && response.length > 0 && (
                        <>
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
                                                <div style={styles.resultContent}>
                                                    <p><strong>RRN:</strong> {item.RRN}</p>
                                                    <p><strong>Customer Number:</strong> {parsedResData.CUSTOMER_NUMBER}</p>
                                                    <p><strong>Status:</strong> {parsedResData.STATUS}</p>
                                                    {parsedResData.ACCOUNT_NUMBER && <p><strong>Account Number:</strong> {parsedResData.ACCOUNT_NUMBER}</p>}
                                                    {parsedResData.ERROR_DESCRIPTION && <p style={styles.errorText}><strong>Error:</strong> {parsedResData.ERROR_DESCRIPTION}</p>}
                                                </div>
                                            </div>
                                        );
                                    } catch (e) {
                                        return (
                                            <div key={index} style={{ ...styles.resultItem, borderLeft: "3px solid #f44336" }}>
                                                <p style={styles.errorText}>Error parsing response for item with RRN {item.RRN}.</p>
                                                <pre>{item.res_data}</pre>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

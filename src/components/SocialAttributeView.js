import { useState } from "react";
import { styles } from "../styles/AppStyles";
import { addToHistory } from "../utils/historyManager";

export default function SocialAttributeView() {
    const [cif, setCif] = useState('');
    const [relcat, setRelcat] = useState('');
    const [region, setRegion] = useState('O');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResponse(null);

        // Using the consistent IP/Port from other components
        const url = 'http://10.1.161.199:5050/social_attribute/';

        const userToken = localStorage.getItem('userToken');
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                body: JSON.stringify({
                    cif,
                    relcat,
                    region,
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.detail || 'Failed to create social attribute');
            }

            const data = await res.json();
            setResponse(data);

            // Add to history
            addToHistory('Social Attribute', {
                count: 1,
                region: region,
                cif: cif,
                details: `Social Attribute created for CIF ${cif}`
            });
        } catch (err) {
            setError(err.message);
            console.error("Error creating social attribute:", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div style={styles.pageHeader}>
                <div>
                    <h1 style={styles.pageTitle}>Create Social Attribute</h1>
                    <p style={styles.pageSubtitle}>Manage social attributes for customers</p>
                </div>
            </div>

            <div style={styles.formCard}>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGrid}>
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
                            <label style={styles.label}>Relcat</label>
                            <input
                                type="text"
                                value={relcat}
                                onChange={(e) => setRelcat(e.target.value)}
                                style={styles.input}
                                required
                            />
                        </div>

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
                    </div>

                    <button type="submit" style={styles.primaryButton} disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>

            {(error || response) && (
                <div style={styles.resultsCard}>
                    {error && <div style={styles.errorMsg}>{error}</div>}

                    {response && (
                        <>
                            <div style={styles.resultsHeader}>
                                <h3 style={styles.resultsTitle}>API Response</h3>
                            </div>
                            <div style={{ ...styles.resultsList, overflowX: 'auto' }}>
                                <pre style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '6px' }}>
                                    {JSON.stringify(response, null, 2)}
                                </pre>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

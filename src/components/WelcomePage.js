import { Shield, TrendingUp, FileText, CheckCircle, Users, Database, Share2 } from "lucide-react";
import { styles } from "../styles/AppStyles";
import SBILogo from "./SBILogo";

export default function WelcomePage({ onNavigate }) {
    return (
        <div style={styles.welcomeContainer}>
            <nav style={styles.navbar}>
                <div style={styles.navBrand}>
                    <SBILogo size={40} />
                    <span style={styles.brandText}>State Bank of India</span>
                </div>
                <div style={styles.navLinks}>
                    <button onClick={() => onNavigate("login")} style={styles.navBtn}>
                        Sign In
                    </button>
                    <button onClick={() => onNavigate("register")} style={styles.navBtnPrimary}>
                        Get Started
                    </button>
                </div>
            </nav>

            <div style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <div style={styles.heroTag}>AUTOMATED TEST DATA PLATFORM</div>
                    <h1 style={styles.heroTitle}>
                        Advanced Banking<br />Test Data Creation
                    </h1>
                    <p style={styles.heroSubtitle}>
                        The official internal tool for generating comprehensive test data for SBI applications. Create CIFs, Accounts, and KYC records in seconds.
                    </p>
                    <div style={styles.heroButtons}>
                        <button onClick={() => onNavigate("login")} style={styles.heroPrimaryBtn}>
                            Get Started
                            <span style={styles.btnArrow}>→</span>
                        </button>
                        <button onClick={() => onNavigate("register")} style={styles.heroSecondaryBtn}>
                            Create Account
                        </button>
                    </div>
                </div>

                <div style={styles.featuresGrid}>
                    <div style={styles.featureCard}>
                        <Shield size={32} color="#003478" />
                        <h3>Secure & Compliant</h3>
                        <p>Built with enterprise-grade security standards for safe data generation.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <TrendingUp size={32} color="#003478" />
                        <h3>High Efficiency</h3>
                        <p>Generate bulk data records instantly to accelerate your testing cycles.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <FileText size={32} color="#003478" />
                        <h3>Comprehensive Data</h3>
                        <p>Full support for all major account types and customer profiles.</p>
                    </div>
                </div>
            </div>

            {/* Capabilities Section */}
            <div style={styles.capabilitiesSection}>
                <h2 style={styles.sectionTitle}>Powerful Capabilities</h2>
                <p style={styles.sectionSubtitle}>
                    Everything you need to test your banking applications effectively.
                </p>

                <div style={styles.capabilitiesGrid}>
                    {/* CIF Management */}
                    <div style={styles.capabilityCard}>
                        <div style={{ ...styles.capabilityIconWrapper, backgroundColor: '#EFF6FF', color: '#1E40AF' }}>
                            <Users size={32} />
                        </div>
                        <h3 style={styles.capabilityTitle}>CIF Management</h3>
                        <ul style={styles.capabilityList}>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                Personal & Non-Personal CIFs
                            </li>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                Bulk Generation (up to 10)
                            </li>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                Region-specific Data
                            </li>
                        </ul>
                    </div>

                    {/* Account Services */}
                    <div style={styles.capabilityCard}>
                        <div style={{ ...styles.capabilityIconWrapper, backgroundColor: '#ECFDF5', color: '#047857' }}>
                            <Database size={32} />
                        </div>
                        <h3 style={styles.capabilityTitle}>Account Services</h3>
                        <ul style={styles.capabilityList}>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                Deposit & Loan Accounts
                            </li>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                CCOD & KCC Accounts
                            </li>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                DL-TL Account Creation
                            </li>
                        </ul>
                    </div>

                    {/* KYC & Compliance */}
                    <div style={styles.capabilityCard}>
                        <div style={{ ...styles.capabilityIconWrapper, backgroundColor: '#F5F3FF', color: '#7C3AED' }}>
                            <Share2 size={32} />
                        </div>
                        <h3 style={styles.capabilityTitle}>KYC & Compliance</h3>
                        <ul style={styles.capabilityList}>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                CKYC Record Generation
                            </li>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                Social Attribute Management
                            </li>
                            <li style={styles.capabilityItem}>
                                <CheckCircle size={20} style={styles.checkIcon} />
                                Validated Data Structures
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={styles.ctaSection}>
                <h2 style={styles.ctaTitle}>Ready to Accelerate Your Testing?</h2>
                <p style={styles.ctaText}>
                    Join hundreds of developers and QA engineers using the SBI Test Data Generator.
                </p>
                <button onClick={() => onNavigate("register")} style={styles.ctaButton}>
                    Create Your Account Now
                </button>
            </div>

            <footer style={styles.footer}>
                <p>© 2025 State Bank of India. Internal Tool. All rights reserved.</p>
            </footer>
        </div>
    );
}

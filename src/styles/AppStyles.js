export const styles = {
    // Auth Container
    authContainer: {
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
    },

    // Auth Split Layout
    authSplit: {
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        minHeight: '600px',
    },

    // Left Side (Branding)
    authLeft: {
        flex: 1,
        background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
    },

    authBrand: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '3rem',
    },

    logoCircle: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#1E3A8A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '1.25rem',
    },

    brandText: {
        fontSize: '1.5rem',
        fontWeight: '700',
    },

    authLeftTitle: {
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '1rem',
        lineHeight: '1.2',
    },

    authLeftSubtitle: {
        fontSize: '1.125rem',
        opacity: 0.9,
        marginBottom: '2rem',
        lineHeight: '1.6',
    },

    authFeatureList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },

    authFeature: {
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.95,
    },

    // Right Side (Form)
    authRight: {
        flex: 1,
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    authForm: {
        maxWidth: '400px',
        width: '100%',
    },

    backLink: {
        background: 'none',
        border: 'none',
        color: '#64748B',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        marginBottom: '1.5rem',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
    },

    authTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: '0.5rem',
    },

    authSubtitle: {
        fontSize: '0.95rem',
        color: '#64748B',
        marginBottom: '2rem',
    },

    // Form Elements
    formGroup: {
        marginBottom: '1.25rem',
    },

    formRow: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.25rem',
    },

    label: {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: '0.5rem',
    },

    input: {
        width: '100%',
        padding: '0.875rem 1rem',
        borderRadius: '0.75rem',
        border: '1px solid #E2E8F0',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        backgroundColor: 'white',
        boxSizing: 'border-box',
    },

    // Buttons
    submitBtn: {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#1E3A8A',
        color: 'white',
        border: 'none',
        borderRadius: '0.75rem',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.2s, transform 0.1s',
        marginBottom: '1rem',
    },

    switchBtn: {
        width: '100%',
        padding: '1rem',
        backgroundColor: 'transparent',
        color: '#1E3A8A',
        border: '1px solid #1E3A8A',
        borderRadius: '0.75rem',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },

    // Divider
    divider: {
        display: 'flex',
        alignItems: 'center',
        margin: '1.5rem 0',
        textAlign: 'center',
    },

    dividerText: {
        flex: 1,
        fontSize: '0.875rem',
        color: '#64748B',
    },

    // Messages
    errorMsg: {
        backgroundColor: '#ffebee',
        color: '#c62828',
        padding: '0.875rem 1rem',
        borderRadius: '0.75rem',
        fontSize: '0.875rem',
        marginBottom: '1rem',
        fontWeight: '500',
    },

    successMsg: {
        backgroundColor: '#e8f5e9',
        color: '#2e7d32',
        padding: '0.875rem 1rem',
        borderRadius: '0.75rem',
        fontSize: '0.875rem',
        marginBottom: '1rem',
        fontWeight: '500',
    },

    // Responsive adjustments
    '@media (max-width: 768px)': {
        authSplit: {
            flexDirection: 'column',
        },
        authLeft: {
            padding: '2rem',
        },
        authRight: {
            padding: '2rem',
        },
    },

    // Welcome Page Styles
    welcomeContainer: {
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        borderBottom: '1px solid #E2E8F0',
    },
    navBrand: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
    },
    navLinks: {
        display: 'flex',
        gap: '1rem',
    },
    navBtn: {
        padding: '0.5rem 1rem',
        backgroundColor: 'transparent',
        color: '#1E293B',
        border: 'none',
        fontWeight: '600',
        cursor: 'pointer',
    },
    navBtnPrimary: {
        padding: '0.5rem 1.5rem',
        backgroundColor: '#1E3A8A',
        color: 'white',
        border: 'none',
        borderRadius: '0.5rem',
        fontWeight: '600',
        cursor: 'pointer',
    },
    heroSection: {
        flex: 1,
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
    },
    heroContent: {
        maxWidth: '800px',
        textAlign: 'center',
        marginBottom: '4rem',
    },
    heroTag: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        backgroundColor: '#DBEAFE',
        color: '#1E40AF',
        borderRadius: '2rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
    },
    heroTitle: {
        fontSize: '3.5rem',
        fontWeight: '800',
        color: '#1E293B',
        lineHeight: '1.1',
        marginBottom: '1.5rem',
    },
    heroSubtitle: {
        fontSize: '1.25rem',
        color: '#64748B',
        marginBottom: '2.5rem',
        lineHeight: '1.6',
    },
    heroButtons: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
    },
    heroPrimaryBtn: {
        padding: '1rem 2rem',
        backgroundColor: '#1E3A8A',
        color: 'white',
        border: 'none',
        borderRadius: '0.75rem',
        fontWeight: '600',
        fontSize: '1.125rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(30, 58, 138, 0.2)',
    },
    btnArrow: {
        fontSize: '1.25rem',
    },
    heroSecondaryBtn: {
        padding: '1rem 2rem',
        backgroundColor: 'white',
        color: '#1E3A8A',
        border: '1px solid #E2E8F0',
        borderRadius: '0.75rem',
        fontWeight: '600',
        fontSize: '1.125rem',
        cursor: 'pointer',
    },
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        width: '100%',
        padding: '0 1rem',
    },
    featureCard: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid #E2E8F0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    },
    footer: {
        padding: '2rem',
        textAlign: 'center',
        color: '#64748B',
        borderTop: '1px solid #E2E8F0',
        backgroundColor: 'white',
    },
    // Enhanced Landing Page Styles
    sectionTitle: {
        fontSize: '2.25rem',
        fontWeight: '800',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    sectionSubtitle: {
        fontSize: '1.125rem',
        color: '#64748B',
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 3rem',
        lineHeight: '1.6',
    },
    capabilitiesSection: {
        padding: '4rem 2rem',
        backgroundColor: 'white',
    },
    capabilitiesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    capabilityCard: {
        padding: '2rem',
        borderRadius: '1.5rem',
        backgroundColor: '#F8FAFC',
        border: '1px solid #E2E8F0',
        transition: 'all 0.3s ease',
        cursor: 'default',
    },
    capabilityIconWrapper: {
        width: '56px',
        height: '56px',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    },
    capabilityTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: '1rem',
    },
    capabilityList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    },
    capabilityItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: '#475569',
        fontSize: '1rem',
    },
    checkIcon: {
        color: '#10B981',
        flexShrink: 0,
    },
    ctaSection: {
        padding: '5rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
        color: 'white',
    },
    ctaTitle: {
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '1.5rem',
    },
    ctaText: {
        fontSize: '1.25rem',
        opacity: 0.9,
        marginBottom: '2.5rem',
        maxWidth: '600px',
        margin: '0 auto 2.5rem',
    },
    ctaButton: {
        padding: '1rem 2.5rem',
        backgroundColor: 'white',
        color: '#1E3A8A',
        border: 'none',
        borderRadius: '0.75rem',
        fontWeight: '700',
        fontSize: '1.125rem',
        cursor: 'pointer',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
    },
};

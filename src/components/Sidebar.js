import React from 'react';
import {
    Users,
    CreditCard,
    Landmark,
    Banknote,
    Sprout,
    FileText,
    UserCheck,
    Share2,
    LayoutDashboard
} from 'lucide-react';

import SBILogo from './SBILogo';

export default function Sidebar({ currentView, onViewChange }) {
    const menuItems = [
        { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
        { id: 'cif', label: 'CIF Creation', icon: Users },
        { id: 'deposit', label: 'Deposit Account', icon: Landmark },
        { id: 'ccod', label: 'CCOD Account', icon: CreditCard },
        { id: 'loan', label: 'Loan Account', icon: Banknote },
        { id: 'kcc', label: 'KCC Account', icon: Sprout },
        { id: 'dltl', label: 'DL-TL Account', icon: FileText },
        { id: 'ckyc', label: 'CKYC Creation', icon: UserCheck },
        { id: 'social', label: 'Social Attributes', icon: Share2 },
    ];

    return (
        <div style={{
            width: '280px',
            backgroundColor: '#1E3A8A',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            overflowY: 'auto'
        }}>
            <div style={{ padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                    <div style={{ padding: '4px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SBILogo size={24} />
                    </div>
                    Test Data Gen
                </div>
            </div>

            <nav style={{ flex: 1, padding: '1rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentView === item.id;

                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => onViewChange(item.id)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem 1rem',
                                        backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                        color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '0.95rem',
                                        fontWeight: isActive ? '600' : '400',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseOver={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.color = 'white';
                                        }
                                    }}
                                    onMouseOut={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                        }
                                    }}
                                >
                                    <Icon size={20} />
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
                &copy; 2024 State Bank of India<br />Internal Use Only
            </div>
        </div>
    );
}

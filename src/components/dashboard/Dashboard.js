import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import CifCreationView from '../CifCreationView';
import DepositAccountView from '../DepositAccountView';
import CcodAccountView from '../CcodAccountView';
import LoanAccountView from '../LoanAccountView';
import KccAccountView from '../KccAccountView';
import DlTlAccountView from '../DlTlAccountView';
import CkycView from '../CkycView';
import SocialAttributeView from '../SocialAttributeView';
import { LogOut, User } from 'lucide-react';
import { getStats, getHistory } from '../../utils/historyManager';

export default function Dashboard({ user, onLogout }) {
    const [currentView, setCurrentView] = useState('dashboard');
    const [stats, setStats] = useState({ cifCount: 0, accountCount: 0 });
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Load stats and history whenever the view changes to 'dashboard'
        if (currentView === 'dashboard') {
            setStats(getStats());
            setHistory(getHistory());
        }
    }, [currentView]);

    const renderView = () => {
        switch (currentView) {
            case 'cif': return <CifCreationView />;
            case 'deposit': return <DepositAccountView />;
            case 'ccod': return <CcodAccountView />;
            case 'loan': return <LoanAccountView />;
            case 'kcc': return <KccAccountView />;
            case 'dltl': return <DlTlAccountView />;
            case 'ckyc': return <CkycView />;
            case 'social': return <SocialAttributeView />;
            default:
                return (
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '1rem' }}>
                            Welcome back, {user?.firstName || 'User'}!
                        </h1>
                        <p style={{ color: '#64748B', marginBottom: '2rem' }}>
                            Select a tool from the sidebar to start generating test data.
                        </p>

                        {/* Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#1E293B' }}>Quick Stats</h3>
                                <div style={{ display: 'flex', gap: '2rem' }}>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3B82F6' }}>{stats.cifCount}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#64748B' }}>CIFs Created</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10B981' }}>{stats.accountCount}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#64748B' }}>Accounts Created</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#1E293B' }}>Recent Activity</h3>
                            {history.length === 0 ? (
                                <p style={{ color: '#94A3B8', fontStyle: 'italic' }}>No activity yet.</p>
                            ) : (
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                                <th style={{ padding: '0.75rem', color: '#64748B', fontSize: '0.875rem' }}>Type</th>
                                                <th style={{ padding: '0.75rem', color: '#64748B', fontSize: '0.875rem' }}>Details</th>
                                                <th style={{ padding: '0.75rem', color: '#64748B', fontSize: '0.875rem' }}>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {history.slice(0, 5).map((item) => (
                                                <tr key={item.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                                    <td style={{ padding: '0.75rem', fontWeight: '500', color: '#334155' }}>{item.type}</td>
                                                    <td style={{ padding: '0.75rem', color: '#475569' }}>{item.details.details || JSON.stringify(item.details)}</td>
                                                    <td style={{ padding: '0.75rem', color: '#94A3B8', fontSize: '0.875rem' }}>
                                                        {new Date(item.timestamp).toLocaleTimeString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                );
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
            <Sidebar currentView={currentView} onViewChange={setCurrentView} />

            <div style={{ flex: 1, marginLeft: '280px', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <header style={{
                    backgroundColor: 'white',
                    padding: '1rem 2rem',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    {user && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: '600', color: '#1E293B' }}>{user.firstName} {user.lastName}</div>
                                <div style={{ fontSize: '0.875rem', color: '#64748B' }}>
                                    {user.username} • Dept: {user.departmentCode}
                                </div>
                            </div>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#EFF6FF',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#1E3A8A'
                            }}>
                                <User size={20} />
                            </div>
                        </div>
                    )}

                    <button
                        onClick={onLogout}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#FEF2F2',
                            color: '#DC2626',
                            border: '1px solid #FECACA',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FEF2F2'}
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </header>

                {/* Main Content */}
                <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                    {renderView()}
                </main>
            </div>
        </div>
    );
}

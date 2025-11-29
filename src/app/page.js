"use client";

import { useState, useEffect } from "react";
import WelcomePage from "../components/WelcomePage";
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import Dashboard from "../components/dashboard/Dashboard";
import { styles } from "../styles/AppStyles";

export default function SBIApp() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [user, setUser] = useState(null);
  const [userToken, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      setLoading(true);
      const response = await fetch('http://10.1.161.50:5050/users/me/', {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const userData = await response.json();
      setUser(userData);
      setIsLoggedIn(true);
      setCurrentPage("dashboard");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch user profile");
      localStorage.removeItem('userToken');
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = async (authToken) => {
    setToken(authToken);
    await fetchUserProfile(authToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage("welcome");
  };

  if (loading && !user && currentPage !== "dashboard") {
    return (
      <div style={styles.loadingContainer || { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <p style={{ marginTop: '1rem', color: '#666' }}>Loading...</p>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Welcome Page
  if (currentPage === "welcome" && !isLoggedIn) {
    return <WelcomePage onNavigate={setCurrentPage} />;
  }

  // Login Page
  if (currentPage === "login" && !isLoggedIn) {
    return (
      <LoginPage
        onLoginSuccess={handleLoginSuccess}
        onNavigate={setCurrentPage}
      />
    );
  }

  // Register Page
  if (currentPage === "register" && !isLoggedIn) {
    return (
      <RegisterPage
        onNavigate={setCurrentPage}
      />
    );
  }

  // Dashboard
  if (isLoggedIn && user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // Fallback loading
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      <p style={{ marginTop: '1rem', color: '#666' }}>Loading...</p>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

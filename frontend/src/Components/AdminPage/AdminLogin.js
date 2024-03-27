// AdminLogin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const Navigate = useNavigate();

  const handleAdminLogin = () => {
    // Handle admin login logic
    // Redirect to create user page upon successful login
    Navigate.push('/admin/create');
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      {/* Admin login form */}
      <button onClick={handleAdminLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;

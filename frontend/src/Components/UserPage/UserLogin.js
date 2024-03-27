// UserLogin.js
import React from 'react';

const UserLogin = () => {
  const handleUserLogin = () => {
    // Handle user login logic
  };

  return (
    <div className="user-login">
      <h2>User Login</h2>
      {/* User login form */}
      <button onClick={handleUserLogin}>Login</button>
    </div>
  );
};

export default UserLogin;

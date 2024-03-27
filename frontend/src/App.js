

// // Import necessary modules
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './Components/LoginPage/Login';

// // Define your routes inside the <Routes> component
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         {/* Add more routes here if needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminPage/AdminLogin';
import CreateUser from './Components/AdminPage/CreateUser';
import UserLogin from './Components/UserPage/UserLogin';
import PasswordChange from './Components/UserPage/PasswordChange';
import LoginPage from './Components/LoginPage/Login';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/" exact component={UserLogin} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/password-change" component={PasswordChange} />
        {/* Add more routes here if needed */}
        </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import LoginPage from "./login";
import RegistrationPage from "./register";
import UserDataPage from "./showDetails";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';



const App = () => {
  const [token, setToken] = useState('')
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/userdata" element={<UserDataPage token={token} />} />
          <Route path="/" element={<Navigate to="/login" />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

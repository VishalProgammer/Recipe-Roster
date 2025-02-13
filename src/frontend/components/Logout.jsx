// src/components/LogoutFooter.jsx
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../backend/database/firebase";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const LogoutFooter = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the login page after logout
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <footer className="footer mt-4 p-3 bg-light text-center">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <anchore className='footer' onClick={handleLogout} >
        Logout
      </anchore>
    </footer>
  );
};

export default LogoutFooter;

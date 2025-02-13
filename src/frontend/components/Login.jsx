// src/components/Login.jsx
import { useState } from "react";
import "./auth.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../backend/database/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/site"); // Redirect to your main site or profile page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="reg-body">
      <span className="reg-bor">
        <h1 id="reg-h">Login</h1>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Register here</Link>
        </p>
      </span>
    </div>
  );
};

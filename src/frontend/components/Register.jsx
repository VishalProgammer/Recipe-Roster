import { useState } from "react"
import './auth.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate, Link } from "react-router-dom";

export const Register = () =>{
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setError("Passwords don't match!");
          return;
        }
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/profile'); // Navigate to profile after successful signup
        } catch (err) {
          setError(err.message);
        }
      };

    return(
        <>
        <div id="reg-body">
            <h1 id="reg-h">Register </h1>
            {error && <p style={{color:red}}>{error}</p>}
            <form action="submit" onSubmit={handleSignup}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            </form>

        </div>
        
        </>
    )
}
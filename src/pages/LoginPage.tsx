//  import  {  useContext } from 'react';
// import {AppContext} from '../context/AppContext';
// import { useNavigate } from "react-router-dom";
 
//  const LoginPage = () => {

//   const navigate = useNavigate();
//   const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
//   return <div onClick={() => {setIsLoggedIn(true); navigate("/dashboard");}} style={{cursor: 'pointer'}}>Login Page
//   </div>;
// };

// export default LoginPage

import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // very basic validation
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // TODO: replace with API authentication
    console.log("Logging in with:", email, password);

    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
  
    
        <h2 style={{color: "rgb(8, 22, 48)"}}>SIGN IN</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.signup}>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} style={styles.link}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "calc(100vh - 100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "#f4f4f4",
  },
  form: {
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "320px",
    height: "320px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    border: "none",
    background: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  signup: {
    fontSize: "14px",
    textAlign: "center" as const,
    color: "rgba(10, 30, 64, 0.2)",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    marginLeft: '10px'
  },
};

export default LoginPage;


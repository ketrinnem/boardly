import { useState, useContext, FormEvent } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { MarginOutlined } from "@mui/icons-material";

const SignUpPage = () => {

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    // Normally you would send data to backend here
    console.log("User created:", { name, email, password });

    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSignup}>

        <h2 style={{color: "rgb(8, 22, 48)"}}>SIGN UP</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Sign Up
        </button>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={()=>navigate("/login")}>
            Login
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
    alignItems: "center" as const,
    // background:"#f4f4f4"
  },
  form: {
    background:"white",
    padding:"40px",
    borderRadius:"10px",
    width:"320px",
    height: "320px",
    display:"flex",
    flexDirection:"column" as const,
    gap:"15px",
    boxShadow:"0 0 10px rgba(0,0,0,0.1)"
  },
  input: {
    padding:"10px",
    border:"1px solid #ccc",
    borderRadius:"5px"
  },
  button: {
    padding:"10px",
    background:"#007bff",
    color:"white",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
  },
  loginText:{
    fontSize:"14px",
    textAlign:"center" as const,
    color: 'rgba(10, 30, 64, 0.2)'
  },
  link:{
    color:"#007bff",
    cursor:"pointer",
    marginLeft: "10px"
  }
};

export default SignUpPage;

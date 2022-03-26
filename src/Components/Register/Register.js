import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleRegister = async (e) => {
    console.log(username, email, password);
    const userInfo = {
      name: username,
      email,
      password,
    };
    let result = await fetch("http://localhost:5001/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userInfo),
    });

    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };
  return (
    <div className="register_form">
      <div className="form">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Enter your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          password={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister} className="btn">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Register;

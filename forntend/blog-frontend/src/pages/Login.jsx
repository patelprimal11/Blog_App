import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("login/", {
//         username: emailOrUsername,
//         password,
//       });
//       localStorage.setItem("token", res.data.access);
//       navigate("/blogs");
//     } catch (err) {
//       alert("Login failed!");
//     }
//   };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("login/", {
        email: emailOrUsername,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/blogs");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed!");
    }
  };
  

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 space-y-4">
      <input className="w-full p-2 border" type="text" placeholder="Email or Username"
        value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} />
      <input className="w-full p-2 border" type="password" placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">Login</button>
    </form>
  );
};

export default Login;

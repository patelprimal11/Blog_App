import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("signup/", formData);
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input className="w-full p-2 border" placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input className="w-full p-2 border" placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input className="w-full p-2 border" type="password" placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button className="bg-green-500 text-white px-4 py-2" type="submit">Signup</button>
    </form>
  );
};

export default Signup;

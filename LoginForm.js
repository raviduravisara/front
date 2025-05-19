import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function LoginForm() {
  const { login } = useContext(GlobalContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!login(form.username, form.password)) {
      setError("Invalid username or password");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

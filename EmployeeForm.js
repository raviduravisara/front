import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function EmployeeForm({ editing, onClose }) {
  const { addEmployee, editEmployee, employees } = useContext(GlobalContext);
  const [form, setForm] = useState(editing || {
    name: "", email: "", phone: "", position: "", address: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      editEmployee(form);
    } else {
      addEmployee({ ...form, id: Date.now() });
    }
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editing ? "Edit" : "Add"} Employee</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
      <button type="submit">Save</button>
      <button onClick={onClose} type="button">Cancel</button>
    </form>
  );
}

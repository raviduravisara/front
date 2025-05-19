import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function PerformanceForm({ editing, onClose }) {
  const { employees, addPerformance, editPerformance } = useContext(GlobalContext);
  const [form, setForm] = useState(
    editing || {
      employeeId: "",
      clientsServed: "",
      revenue: "",
      rating: "",
      date: "",
    }
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      editPerformance(form);
    } else {
      addPerformance({ ...form, id: Date.now() });
    }
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editing ? "Edit" : "Add"} Performance</h3>
      <select
        name="employeeId"
        value={form.employeeId}
        onChange={handleChange}
        required
      >
        <option value="">Select Employee</option>
        {employees.map(emp => (
          <option key={emp.id} value={emp.id}>{emp.name}</option>
        ))}
      </select>
      <input
        name="clientsServed"
        value={form.clientsServed}
        onChange={handleChange}
        placeholder="Clients Served"
        type="number"
        required
      />
      <input
        name="revenue"
        value={form.revenue}
        onChange={handleChange}
        placeholder="Revenue"
        type="number"
        required
      />
      <input
        name="rating"
        value={form.rating}
        onChange={handleChange}
        placeholder="Rating"
        type="number"
        step="0.1"
        required
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="Date (YYYY-MM-DD)"
        type="date"
        required
      />
      <button type="submit">Save</button>
      <button onClick={onClose} type="button">Cancel</button>
    </form>
  );
}

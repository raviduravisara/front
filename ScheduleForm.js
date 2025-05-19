import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ScheduleForm({ editing, onClose }) {
  const { employees, addSchedule, editSchedule } = useContext(GlobalContext);
  const [form, setForm] = useState(
    editing || {
      employeeId: "",
      day: "",
      startTime: "",
      endTime: "",
    }
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      editSchedule(form);
    } else {
      addSchedule({ ...form, id: Date.now() });
    }
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editing ? "Edit" : "Create"} Schedule</h3>
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
        name="day"
        value={form.day}
        onChange={handleChange}
        placeholder="Day (e.g. Monday)"
        required
      />
      <input
        name="startTime"
        value={form.startTime}
        onChange={handleChange}
        placeholder="Start Time (e.g. 09:00)"
        required
      />
      <input
        name="endTime"
        value={form.endTime}
        onChange={handleChange}
        placeholder="End Time (e.g. 17:00)"
        required
      />
      <button type="submit">Save</button>
      <button onClick={onClose} type="button">Cancel</button>
    </form>
  );
}

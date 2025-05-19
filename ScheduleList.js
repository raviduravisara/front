import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ScheduleList({ onEdit }) {
  const { schedules, employees, removeSchedule, role } = useContext(GlobalContext);
  const [selectedEmp, setSelectedEmp] = useState("");

  // Filter schedules by employee if selected
  const filteredSchedules = selectedEmp
    ? schedules.filter((s) => s.employeeId === selectedEmp)
    : schedules;

  return (
    <div>
      <h2>Work Schedules</h2>
      <label>
        Filter by Employee:{" "}
        <select value={selectedEmp} onChange={e => setSelectedEmp(e.target.value)}>
          <option value="">All</option>
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>{emp.name}</option>
          ))}
        </select>
      </label>
      {role === "admin" && <button onClick={() => onEdit(null)}>Create Schedule</button>}
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredSchedules.map(sch => (
            <tr key={sch.id}>
              <td>{employees.find(e => e.id === sch.employeeId)?.name || "N/A"}</td>
              <td>{sch.day}</td>
              <td>{sch.startTime}</td>
              <td>{sch.endTime}</td>
              {role === "admin" && (
                <td>
                  <button onClick={() => onEdit(sch)}>Edit</button>
                  <button onClick={() => removeSchedule(sch.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function PerformanceList({ onEdit }) {
  const { performances, employees, removePerformance, role } = useContext(GlobalContext);
  const [selectedEmp, setSelectedEmp] = useState("");

  const filteredPerformances = selectedEmp
    ? performances.filter((p) => p.employeeId === selectedEmp)
    : performances;

  return (
    <div>
      <h2>Performance Metrics</h2>
      <label>
        Filter by Employee:{" "}
        <select value={selectedEmp} onChange={e => setSelectedEmp(e.target.value)}>
          <option value="">All</option>
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>{emp.name}</option>
          ))}
        </select>
      </label>
      {role === "admin" && <button onClick={() => onEdit(null)}>Add Performance</button>}
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Clients Served</th>
            <th>Revenue</th>
            <th>Rating</th>
            <th>Date</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredPerformances.map(perf => (
            <tr key={perf.id}>
              <td>{employees.find(e => e.id === perf.employeeId)?.name || "N/A"}</td>
              <td>{perf.clientsServed}</td>
              <td>{perf.revenue}</td>
              <td>{perf.rating}</td>
              <td>{perf.date}</td>
              {role === "admin" && (
                <td>
                  <button onClick={() => onEdit(perf)}>Edit</button>
                  <button onClick={() => removePerformance(perf.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

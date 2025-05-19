import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function EmployeeList({ onEdit, onView }) {
  const { employees, removeEmployee, role } = useContext(GlobalContext);

  return (
    <div>
      <h2>Employees</h2>
      {role === "admin" && <button onClick={() => onEdit(null)}>Add New Employee</button>}
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Position</th><th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.position}</td>
              <td>{emp.address}</td>
              <td>
                <button onClick={() => onView(emp)}>View</button>
                {role === "admin" && (
                  <>
                    <button onClick={() => onEdit(emp)}>Edit</button>
                    <button onClick={() => removeEmployee(emp.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
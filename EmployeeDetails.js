import React from "react";

export default function EmployeeDetails({ employee, onClose }) {
  if (!employee) return null;
  return (
    <div>
      <h3>Employee Details</h3>
      <p><b>Name:</b> {employee.name}</p>
      <p><b>Email:</b> {employee.email}</p>
      <p><b>Phone:</b> {employee.phone}</p>
      <p><b>Position:</b> {employee.position}</p>
      <p><b>Address:</b> {employee.address}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

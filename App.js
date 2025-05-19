import React, { useState, useContext } from "react";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeDetails from "./components/EmployeeDetails";
import ScheduleList from "./components/ScheduleList";
import ScheduleForm from "./components/ScheduleForm";
import PerformanceList from "./components/PerformanceList";
import PerformanceForm from "./components/PerformanceForm";

function MainApp() {
  const { user, logout } = useContext(GlobalContext);
  const [editingEmp, setEditingEmp] = useState(null);
  const [viewingEmp, setViewingEmp] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [editingPerformance, setEditingPerformance] = useState(null);

  return (
    <div className="App">
      {/* Header always at the top */}
      <div className="app-header">
        Employee Management &amp; Scheduling
      </div>

      {!user ? (
        <LoginForm />
      ) : (
        <>
          <div style={{ marginBottom: 12 }}>
            Logged in as: <b>{user.username}</b> ({user.role})
            <button onClick={logout} style={{ marginLeft: 10 }}>Logout</button>
          </div>

          {/* Employee Management */}
          <EmployeeList onEdit={setEditingEmp} onView={setViewingEmp} />
          {editingEmp !== undefined && (
            <EmployeeForm editing={editingEmp} onClose={() => setEditingEmp(undefined)} />
          )}
          {viewingEmp && (
            <EmployeeDetails employee={viewingEmp} onClose={() => setViewingEmp(null)} />
          )}

          {/* Schedule Management */}
          <ScheduleList onEdit={setEditingSchedule} />
          {editingSchedule !== undefined && (
            <ScheduleForm editing={editingSchedule} onClose={() => setEditingSchedule(undefined)} />
          )}

          {/* Performance Management */}
          <PerformanceList onEdit={setEditingPerformance} />
          {editingPerformance !== undefined && (
            <PerformanceForm editing={editingPerformance} onClose={() => setEditingPerformance(undefined)} />
          )}
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <GlobalProvider>
      <MainApp />
    </GlobalProvider>
  );
}

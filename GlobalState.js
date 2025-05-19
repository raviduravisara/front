import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  employees: [],
  schedules: [],
  performances: [],
  user: null,
  role: null,
  users: [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "employee", password: "emp123", role: "employee" }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Employee actions
  function addEmployee(emp) { dispatch({ type: "ADD_EMPLOYEE", payload: emp }); }
  function editEmployee(emp) { dispatch({ type: "EDIT_EMPLOYEE", payload: emp }); }
  function removeEmployee(id) { dispatch({ type: "REMOVE_EMPLOYEE", payload: id }); }

  // Schedule actions
  function addSchedule(sch) { dispatch({ type: "ADD_SCHEDULE", payload: sch }); }
  function editSchedule(sch) { dispatch({ type: "EDIT_SCHEDULE", payload: sch }); }
  function removeSchedule(id) { dispatch({ type: "REMOVE_SCHEDULE", payload: id }); }

  // Performance actions
  function addPerformance(perf) { dispatch({ type: "ADD_PERFORMANCE", payload: perf }); }
  function editPerformance(perf) { dispatch({ type: "EDIT_PERFORMANCE", payload: perf }); }
  function removePerformance(id) { dispatch({ type: "REMOVE_PERFORMANCE", payload: id }); }

  // LOGIN AND LOGOUT FUNCTIONS
  function login(username, password) {
    const found = state.users.find(
      u => u.username === username && u.password === password
    );
    if (found) {
      dispatch({ type: "LOGIN", payload: { username: found.username, role: found.role } });
      return true;
    }
    return false;
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        schedules: state.schedules,
        performances: state.performances,
        user: state.user,
        role: state.role,
        addEmployee,
        editEmployee,
        removeEmployee,
        addSchedule,
        editSchedule,
        removeSchedule,
        addPerformance,
        editPerformance,
        removePerformance,
        login,
        logout
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

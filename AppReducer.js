export default function appReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload, role: action.payload.role };
  
      case "LOGOUT":
        return { ...state, user: null, role: null };
  
      case "ADD_EMPLOYEE":
        return { ...state, employees: [...state.employees, action.payload] };
  
      case "EDIT_EMPLOYEE":
        return {
          ...state,
          employees: state.employees.map(emp =>
            emp.id === action.payload.id ? action.payload : emp
          ),
        };
  
      case "REMOVE_EMPLOYEE":
        return {
          ...state,
          employees: state.employees.filter(emp => emp.id !== action.payload),
        };
  
      case "ADD_SCHEDULE":
        return { ...state, schedules: [...state.schedules, action.payload] };
  
      case "EDIT_SCHEDULE":
        return {
          ...state,
          schedules: state.schedules.map(sch =>
            sch.id === action.payload.id ? action.payload : sch
          ),
        };
  
      case "REMOVE_SCHEDULE":
        return {
          ...state,
          schedules: state.schedules.filter(sch => sch.id !== action.payload),
        };
  
      case "ADD_PERFORMANCE":
        return { ...state, performances: [...state.performances, action.payload] };
  
      case "EDIT_PERFORMANCE":
        return {
          ...state,
          performances: state.performances.map(perf =>
            perf.id === action.payload.id ? action.payload : perf
          ),
        };
  
      case "REMOVE_PERFORMANCE":
        return {
          ...state,
          performances: state.performances.filter(perf => perf.id !== action.payload),
        };
  
      case "SET_ROLE":
        return { ...state, role: action.payload };
  
      default:
        return state;
    }
  }
  
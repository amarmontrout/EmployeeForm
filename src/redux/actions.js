export const addEmployee = (employee) => {
    return {
      type: 'ADD_EMPLOYEE',
      payload: employee
    };
  };
  
  export const loadEmployees = (employees) => {
    return {
      type: 'LOAD_EMPLOYEES',
      payload: employees
    };
  };
  
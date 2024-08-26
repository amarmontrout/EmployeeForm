import React, { useState, useEffect } from 'react';
import EmployeeForm from './Components/EmployeeForm';
import './EmployeeForm.css';

function App() {
  
  // Employees state variable
  const [employees, setEmployees] = useState([]);

  // Responsible for loading from local storage
  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    console.log('Retrieved from local storage:', savedEmployees);
    
    if (savedEmployees) {
      const parsedEmployees = JSON.parse(savedEmployees);
      setEmployees(parsedEmployees);
    }
  }, []);

  // Function to save data to local storage
  const saveData = (newEmployees) => {
      console.log('Saving to local storage:', newEmployees);
      localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  // Function to add employee to employees state variable
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };
  
  return (
    <div className="App">
      <EmployeeForm AddEmployee={addEmployee}/>
    </div>
  );
}

export default App;
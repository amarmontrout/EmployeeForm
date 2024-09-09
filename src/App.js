import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import { useDispatch, useSelector } from 'react-redux';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeList from './Components/EmployeeList';
import { loadEmployees } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    dispatch(loadEmployees(savedEmployees));
  }, [dispatch]);

  // save the employee array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    // create the browser component and define the paths
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <EmployeeForm />
            <EmployeeList />
            <button onClick={saveData} style={{display: 'block', margin: '0 auto' }}>Save Data</button>
          </>
        } />
        <Route path="/employees/:id" element={<EmployeeDetail />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
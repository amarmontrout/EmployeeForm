import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Content/employee.css';

// A functional component for displaying a list of employees
function EmployeeList(props) {

  const employees = useSelector((state) => state.employees);

  // Render the employee list
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeId}>
            {/* Create a link to the employee detail page */}
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Content/employee.css';

function EmployeeDetail(props) {
  // grab the id from the URL
  const { id } = useParams();
  const employees = useSelector((state) => state.employees);
  
  // find that employee by id
  const employee = employees.find((employee) => employee.EmployeeId === parseInt(id));
  const { EmployeeId, name, email, title, department } = employee || {}; // Provide fallback object if employee is undefined

  // render an HTML with that employees information
  return (
    <div className="employee-detail">
      <table>
        <tbody>
          <tr>
            <td><label>Employee ID: </label></td>
            <td>{EmployeeId}</td>
          </tr>
          <tr>
            <td><label>Name: </label></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><label>Email: </label></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><label>Title: </label></td>
            <td>{title}</td>
          </tr>
          <tr>
            <td><label>Department: </label></td>
            <td>{department}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetail;
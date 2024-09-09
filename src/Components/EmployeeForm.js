import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions';
import '../Content/employee.css';

// define the function
function EmployeeForm() {
  
  // define the varibales and setter functions, and set them to the default state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');

  const dispatch = useDispatch();

    // define a submit function
    const handleSubmit = (e) => {
    e.preventDefault();

    // creates employee object
    const employee = {
        EmployeeId: Math.floor(Math.random() * 10000),
        name,
        email,
        title,
        department,
    };
    
    dispatch(addEmployee(employee));

    // empties text fields
    setName('');
    setEmail('');
    setTitle('');
    setDepartment('');
  };


  return (
    // define the form
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="department">Department: </label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default EmployeeForm;
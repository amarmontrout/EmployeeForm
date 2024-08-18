import React from "react";


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", email: "", title: "", department: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with state:", this.state);

        this.setState({ name: "", email: "", title: "", department: "" });
    }

    render () {
        return (
            <form  className="employee-form" onSubmit={this.handleSubmit}>
                <h2>Add Employee</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Department:</label>
                    <input type="text" name="department" value={this.state.department} onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default EmployeeForm;
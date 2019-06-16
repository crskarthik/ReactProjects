import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap';
import * as actionsTypes from '../actions/employeeActions'
class Employee extends Component {
    componentWillMount() {
        this.props.fetchEmployee();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.editEmployee){
            this.props.history.push('/edit')
        }
    }
    render() {
        let empTags = null
        if (this.props.employees != null) {
            empTags =
                this.props.employees.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>&nbsp;<Button variant="secondary" onClick={()=>this.props.findEmployee(emp.id)}>Update</Button>&nbsp;|&nbsp;
                    <Button variant="danger">Delete</Button></td>
                    </tr>
                ))
        }
        if (!empTags) {
            empTags = <tr><td>Error fetching database</td></tr>
        }
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {empTags}
                </tbody>
            </Table>
        )
    }
}
const mapStateToProps = state => {
    return {
        employees: state.employees,
        editEmployee:state.editEmployee
    }
}
const mapActionsToProps = dispatch=>{
    return{
        fetchEmployee:()=>dispatch(actionsTypes.fetchEmployees()),
        findEmployee:(id)=>dispatch(actionsTypes.findEmployee(id))
    }
}
export default connect(mapStateToProps, mapActionsToProps)(Employee)
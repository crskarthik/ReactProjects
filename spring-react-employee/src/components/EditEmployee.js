import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { resetEditEmployee,saveEmployee } from '../actions/employeeActions';
class EditEmployee extends Component {
    state={
        id:0,
        firstName:"",
        lastName:"",
        email:""
    }
    componentWillMount(){
        if(!this.props.employee){
            window.location.href="/"
            
        }else{
            this.setState({
                id:this.props.employee.id,
                firstName:this.props.employee.firstName,
                lastName:this.props.employee.lastName,
                email:this.props.employee.email
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.employee==null){
            window.location.href="/"
        }else{
            this.setState({
                id:this.props.employee.id,
                firstName:this.props.employee.firstName,
                lastName:this.props.employee.lastName,
                email:this.props.employee.email
            })
        }
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmitHandler(){
        this.props.saveEmp([...this.state])
    }
    render() {
        return (
            <Form>
                <FormGroup controlId="formBasicId">
                    <FormLabel>Id</FormLabel>
                    <FormControl type="text" disabled placeholder="" value={this.state.id} name="id" onChange={this.onChangeHandler.bind(this)}/>
                </FormGroup>
                <FormGroup controlId="formBasicFirstName">
                    <FormLabel>First Name</FormLabel>
                    <FormControl type="text" value={this.state.firstName} name="firstName" onChange={this.onChangeHandler.bind(this)}/>
                </FormGroup>
                <FormGroup controlId="formBasicLastName">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type="text" value={this.state.lastName} name="lastName" onChange={this.onChangeHandler.bind(this)}/>
                </FormGroup>
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" value={this.state.email} name="email" onChange={this.onChangeHandler.bind(this)}/>
                </FormGroup>
                <Button variant="primary" onClick={()=>this.props.saveEmp(this.state)}>
                    Save
            </Button>&nbsp;
            <Button variant="danger" onClick={this.props.resetEmployee}>
                    Reset
            </Button>
            </Form>
        )
    }
}
const mapPropsToStore = state => {
    return {
        employee: state.editEmployee
    }
}
const mapActionsToProps = dispatch =>{
    return{
        saveEmp:(employee)=>dispatch(saveEmployee(employee)),
        resetEmployee:()=>dispatch(resetEditEmployee())
    }
}
export default connect(mapPropsToStore, mapActionsToProps)(EditEmployee)
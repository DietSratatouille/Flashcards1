import React from 'react'
import {Component} from 'react'
import CtrlServices from '../../services/CtrlServices'
import { Link } from 'react-router-dom'
class NewUser extends Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsername(event){
        this.setState({
            username: event.target.value
        })
    }

    handlePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    handleSubmit(event){
        let user={
            username: this.state.username,
            password: this.state.password
        }
        CtrlServices.addUser(user)
        event.preventDefault()
        console.log(user)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>Username:</p> 
                <input type="text" value={this.state.username} onChange={this.handleUsername}/>
                <br></br>
                <p>New Password:</p>
                <input type="text"value={this.state.password} onChange={this.handlePassword}/>
                <br></br>
                <button className="btn btn-link" style={{color: "black"}}> <Link to='/login'>Submit</Link></button>
            </form>
        )
    }
}
export default NewUser
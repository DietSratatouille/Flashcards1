import React from 'react'
import {Component} from 'react'
import CtrlServices from '../../services/CtrlServices'
import { Link } from 'react-router-dom'
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            test: ''
            
        }
   

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
         //console.log(this.state.username)
    }

    handlePasswordChange(event) {
        this.setState({
        password: event.target.value
        })
        // console.log(this.state.password)
    }

    handleSubmit(event){
        let user = {
            userName: this.state.username,
            password: this.state.password
            
        }
        event.preventDefault()
        //console.log(user)
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>Username:</p>
                <input type="text" className="text-input" value={this.state.username} onChange={this.handleUsernameChange}/>
                <p>Password:</p>
                <input type="text" className="text-input" value={this.state.password} onChange={this.handlePasswordChange}/>
                <br></br>
                <button className='btn btn-link jumbo'><Link to='/home'>Login </Link></button>
                <button className='btn btn-link jumbo' style={{color: "black"}} type="button"><Link to="/addUser">Register</Link></button>

                
            </form>
            
        );
    }
}
export default Login
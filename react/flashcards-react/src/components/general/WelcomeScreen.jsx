import React from 'react'
import {Link} from 'react-router-dom'

function WelcomeScreen(){
    return(
        <div>
            <h1>Welcome to SJW Flashcard Assistant</h1>
            <button className='btn btn-link' style={{color: "black"}} type="button"><Link to="/home">Login</Link></button>
            <button className='btn btn-link' style={{color: "black"}} type="button"><Link to="/addUser">Register</Link></button>
        </div>
    )
}
export default WelcomeScreen;
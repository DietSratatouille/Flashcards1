import React from 'react'
import {Link} from 'react-router-dom'

function HomePage(){
    return(
        <div>
            <button className='btn btn-link button' style={{color: "black", textAlign: "right", marginLeft:'80%'}} type="button"><Link to="/login">Logout</Link></button>

            <div>
                <h2>Home Base</h2>
                <button className = 'btn btn-link' style={{color:"black"}} type="button"><Link to="/study">Study Cards</Link></button>
                <button className = 'btn btn-link' style={{color:"black"}} type="button"><Link to="/showCards">Manage Cards</Link></button>
            </div>
        </div>
    )
}
export default HomePage
import React from 'react'
import {Component} from 'react'
import CtrlServices from '../../services/CtrlServices'
import {Link} from 'react-router-dom'

function Logout(){
    return(
        <div>
            <button className='btn btn-link' style={{color: "black", textAlign: "right"}} type="button"><Link to="/login">Logout</Link></button>
        </div>
    )
}
export default Logout
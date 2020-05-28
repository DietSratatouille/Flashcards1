import React, { Component } from "react"
import {Link} from 'react-router-dom'
import CtrlServices from "../../services/CtrlServices"

class StudyAnswer extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            answer: ''
        }
        this.showAnswer = this.showAnswer.bind(this)
    }

    componentDidMount(){
        this.showAnswer();
    }

    showAnswer(id){
        CtrlServices.getAnswer(this.state.id)
        .then(
            response => {
                this.setState({
                    answer: response.data
                })
            }
        )
        console.log(this.state.answer)
        console.log(this.state.id)
    }
    
    render() {
        return(
            <div>
                <button className='btn btn-link button' style={{marginLeft: '80%'}} type="button"><Link to="/login">Logout</Link></button>
                <button className='btn btn-link button2' style={{color: "black", textAlign: "right"}} type="button"><Link to="/home">Home</Link></button>
                <div className="container">
                    <div>
                    <div class="card">
                        <div class="card-body">{this.state.answer}</div>
                        <button className= 'btn btn-link' style={{color:"black"}}><Link to='/studyQuestion/1'> Question </Link></button>
                    </div>

                </div>

                </div>
            </div>
        )
    }
}
export default StudyAnswer
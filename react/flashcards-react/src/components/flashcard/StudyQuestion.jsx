import React, { Component } from "react"
import {Link} from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import CtrlServices from "../../services/CtrlServices"


class StudyQuestion extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            question: ''
        }
        this.showQuestion = this.showQuestion.bind(this)
    }

    componentDidMount(){
        this.showQuestion()
    } //wont actually call the showQuestion function without this mount

    showQuestion(id){
        //CtrlServices.getRandom()
        CtrlServices.getQuestion(this.state.id)
        .then(
            response => {
                this.setState({
                    question: response.data
                })
            }
        )
        console.log(this.state.question)
        console.log(this.state.id)
    }

    render(){
        return(
            <div>
                <button className='btn btn-link button' style={{marginLeft: '80%'}} type="button"><Link to="/login">Logout</Link></button>
                <button className='btn btn-link button2' style={{color: "black", textAlign: "right"}} type="button"><Link to="/home">Home</Link></button>
                <div className="container">
                    <div>
                    <div class="card">
                        <div class="card-body">{this.state.question}</div>
                        <button className= 'btn btn-link' style={{color:"black"}}><Link to='/studyAnswer/1'> Answer </Link></button>
                    </div>

                </div>

                </div>
            </div>
        )
    }


}
export default StudyQuestion
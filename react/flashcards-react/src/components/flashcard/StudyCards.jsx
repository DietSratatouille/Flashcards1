import React, { Component } from "react"
import {Link} from 'react-router-dom'
import ShowAllCards from "./ShowAllCards"
//import CtrlServices from "../../Services/CtrlServices" //--> probably the dumbest issue I've ever had to debug why and how tf would it auto import the wrong path name
import CtrlServices from '../../services/CtrlServices'


class StudyCards extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            question: [],
            answer: ''
        }
        this.showQuestionSwitch = this.showQuestionSwitch.bind(this)
        this.showAnswerSwitch = this.showAnswerSwitch.bind(this)
        this.randomFlashcard = this.randomFlashcard.bind(this)
    }
    componentDidMount(){
        this.randomFlashcard()
    }

     randomFlashcard(){
         CtrlServices.getRandom()
         CtrlServices.getQuestion(this.state.id)
         .then(
             response =>{
                 this.setState({
                    question:response.data

                 })
            }
         )
            
         //question: response.data
    }

    showQuestionSwitch(){

        this.props.history.push(`/studyQuestion/1`)
    }

    showAnswerSwitch(){

        this.props.history.push(`/studyAnswer/1`)
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <button className='btn btn-link button' style={{marginLeft: '80%'}} type="button"><Link to="/login">Logout</Link></button>
                <button className='btn btn-link button2' style={{color: "black", textAlign: "right"}} type="button"><Link to="/home">Home</Link></button>
                <br></br>
                <br></br>
                <div>
                    <button className="btn btn-link" style={{color:"black"}} onClick={()=> this.showQuestionSwitch()}>Question</button>
                    <button className="btn btn-link" style={{color:"black"}} onClick={()=> this.showAnswerSwitch()}>Answer</button>
                </div>
            </div>
        )
    }

}
export default StudyCards

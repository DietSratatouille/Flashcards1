import React, { Component } from "react"
import {Link} from 'react-router-dom'
import ShowAllCards from "./ShowAllCards"
//import CtrlServices from "../../Services/CtrlServices" //--> probably the dumbest issue I've ever had to debug why and how tf would it auto import the wrong path name
import CtrlServices from '../../services/CtrlServices'


class StudyCards extends Component{
    constructor(props){
        super(props)
        this.state={
            //flashcard: [],
            //flashcard: new Object(),
            question: '',
            answer:''
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
         .then(
             response =>{
                this.setState({question:response.data.question, answer:response.data.answer})
                 console.log({flashcard:response.data})
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
                <div  className="container">
                    <h1 style={{textAlign:"center"}}>Flashcard</h1><br></br>
                    <div className="jumbotron">
                        <label>Question</label> <br></br>
                        <textarea className="form-control table" type="text" rows="5" cols="70" name="question" value={this.state.question}></textarea> <br></br>

                        <label>Answer</label> <br></br>
                        <textarea className="form-control table" type="text" rows="5" cols="70" name="question" value={this.state.answer}></textarea>
                    </div>
                </div>
            </div>
        )
    }

}
export default StudyCards

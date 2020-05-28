import React from 'react'
import {Component} from 'react'
import CtrlServices from '../../services/CtrlServices'
import {Link} from 'react-router-dom'


class AddCard extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            question: '',
            answer:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addCard = this.addCard.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addCard(){
        let Flashcard = {
            id: this.state.id,
            question: this.state.question,
            answer: this.state.answer
        }
        CtrlServices.addCard(Flashcard)
        .then(this.props.history.push(`/showCards`))
    }

    render(){
        return(
            <div>
                <h2>Add New Card</h2>
                <div>
                    <form onSubmit={this.addCard}>
                            <div className="form-group">
                                <label>ID:</label>
                                <input className="form-control table" type="text" value={this.state.id} disabled></input>
                            </div>
                            <div>
                                <label>Question:</label>
                                <input className="form-control table" type="text" name="question" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label>Answer:</label>
                                <input className="form-control table" type="text" name="answer" onChange={this.handleChange}></input>
                            </div>
                            <br/><br/>
                            <button className="btn btn-link" style={{color:"black"}} type="submit"><Link to= '/showCards'>Submit</Link></button><br/><br/>
                        </form>
                </div>
            </div>
                            )
    }
}
export default AddCard
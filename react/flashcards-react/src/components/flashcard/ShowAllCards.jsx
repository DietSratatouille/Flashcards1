import React from 'react'
import {Component} from 'react'
import CtrlServices from '../../services/CtrlServices'
import {Link} from 'react-router-dom'

class ShowAllCards extends Component{
    constructor(props){
        super(props)
        this.state={
            allCards: []
        }
        this.showCards = this.showCards.bind(this)
        this.deleteCard = this.deleteCard.bind(this)
        this.deleteAll = this.deleteAll.bind(this)
        this.editCardSwitch = this.editCardSwitch.bind(this)
    }

    componentDidMount(){
        this.showCards();
    }

    editCardSwitch(id, question, answer){
        console.log('Edit button clicked')
        this.props.history.push(`/editCard/${id}/${question}/${answer}`)
    }

    deleteCard(id){
        console.log('Card removed')
        CtrlServices.deleteCard(id)
        .then(
            response =>{
                this.showCards();
            }
        )
    }



    showCards(){
        console.log('Showing all cards')
        CtrlServices.showAllCards()
        .then(
            response=> {
                this.setState({allCards: response.data})
                console.log({allCards: response.data})
            }
        )
    }

    deleteAll(){
        console.log('Deleted all cards')
        CtrlServices.wipeAllCards()
        .then(
            response=> {
                this.showCards();
            }
        )
    }

    render(){
        return(
            <div>
                <button className='btn btn-link button' style={{marginLeft: '80%'}} type="button"><Link to="/login">Logout</Link></button>
                <button className='btn btn-link button2' style={{color: "black", textAlign: "right"}} type="button"><Link to="/home">Home</Link></button>
                <div className="container">
                <h1 style={{textAlign:"center", alignContent:"40%"}}>Flashcards</h1><br></br>
                <div className="jumbotron" >
                            <div className="table-bordered" >
                                <thead>
                                    <tr style={{textAlign: "center"}}>
                                        <th>Question</th>
                                        <th>Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.allCards.map(
                                            allCards =>
                                            <tr style={{textAlign: "center"}} key={allCards.id}>
                                                <td>{allCards.question}</td>

                                                <td>{allCards.answer}</td>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <td><button className="btn btn-link button" style={{color:"black"}} onClick={()=> this.deleteCard(allCards.id)}>Delete card</button></td>
                                                <td><button className="btn btn-link" style={{color:"black"}}
                                                        onClick={()=> this.editCardSwitch(allCards.id, allCards.question, allCards.answer)}>
                                                        Edit Card
                                                    </button> 
                                                </td>  
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </div>
                            <br></br>
                            <button className = 'btn btn-link' style={{color:"black"}} type="button"><Link to="/addCard">Add new card</Link></button>
                            <button className="btn btn-link button" style={{color:"black"}} onClick={()=> this.deleteAll()}>Delete all cards</button>
                            <br></br>
                            <br></br>
                    </div>
                </div>
                
            </div>
        )
    }

}
export default ShowAllCards
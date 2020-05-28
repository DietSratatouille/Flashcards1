import React from 'react'
import {Component} from 'react'
import CtrlServices from '../../services/CtrlServices'
import {Formik, Form, Field} from 'formik'

class EditCard extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            question: this.props.match.params.question,
            answer: this.props.match.params.answer
        }
        this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(vals){
        let Flashcard = {
            id: this.state.id,
            question: vals.question,
            answer: vals.answer
        }
        CtrlServices.editCard(Flashcard)
        .then(() => this.props.history.push(`/showCards`))
    }

    render(){
        let{id, question, answer} = this.state
        return(
            <div className= "container">
                <div className= "jumbotron">
                    <h2> Edit Card</h2> <br></br> <br></br>
                    <Formik 
                        initialValues={{id,question,answer}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset>
                                        <label>ID</label>
                                        <Field className="form-control" type="text" name="id" disabled></Field>
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label>Question</label>
                                        <Field className="form-control" type="text" name="question"></Field>
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label>Answer</label>
                                        <Field className="form-control" type="text" name="answer"/>
                                    </fieldset>
                                    <button className="btn btn-link" style={{color:"black"}} type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default EditCard
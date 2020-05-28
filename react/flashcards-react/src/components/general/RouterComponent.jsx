import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Login from '../user/Login'
import Logout from '../user/Logout'
import WelcomeScreen from './WelcomeScreen'
import HomePage from './HomePage'
import AddCard from '../flashcard/AddCard'
import EditCard from '../flashcard/EditCard'
import ShowAllCards from '../flashcard/ShowAllCards'
import NewUser from '../user/NewUser'
import EditUser from '../user/EditUser'
import StudyCards from '../flashcard/StudyCards'
import StudyAnswer from '../flashcard/StudyAnswer'
import StudyQuestion from '../flashcard/StudyQuestion'

class RouterComponent extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/"><WelcomeScreen/></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/logout" component={Logout}></Route>
                        <Route path="/home" component={HomePage}></Route>
                        <Route path="/study" component={StudyCards}></Route>
                        <Route path="/studyAnswer/:id" component={StudyAnswer}></Route>
                        <Route path="/studyQuestion/:id" component={StudyQuestion}></Route>
                        <Route path="/showCards" component={ShowAllCards}></Route>
                        <Route path="/addCard" component={AddCard}></Route>
                        <Route path="/editCard/:id/:question/:answer" component={EditCard}></Route>
                        <Route path="/addUser" component={NewUser}></Route>
                        <Route path="/editUser" component={EditUser}></Route>

                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
export default RouterComponent
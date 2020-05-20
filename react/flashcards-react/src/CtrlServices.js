import axios from 'axios'

class CtrlServices{
    //POST Requests
    addCard(flashcard){
        return axios.post(`http://localhost:8080/addCard`, flashcard)
    }

    addUser(user){
        return axios.post(`http://localhost:8080/addUser`, user)
    }
//_________________________________________________________________

    //PUT Requests
    editCard(flashcard){
        return axios.put(`http://localhost:8080/editCard`, flashcard);
    }

    editUser(user){
        return axios.put(`http://localhost:8080/editUser`, user);
    }
//__________________________________________________________________

    //GET Requests
    showAllCards(){
        return axios.get(`http://localhost:8080/showAllCards`);
    }

    getCard(cardID){
        return axios.get(`http://localhost:8080/getCard/${cardID}`);
    }
//___________________________________________________________________

    //DELETE Requests
    deleteCard(cardID){
        return axios.delete(`http://localhost:8080/deleteCard/${cardID}`)
    }

    deleteUser(userID){
        return axios.delete(`http://localhost:8080/deleteUser/${userID}`)
    }

    wipeAllCards(){
        return axios.delete(`http://localhost:8080/wipeAllCards`)
    }
}
export default new CtrlServices()
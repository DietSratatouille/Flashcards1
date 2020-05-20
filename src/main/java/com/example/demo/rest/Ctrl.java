package com.example.demo.rest;

import com.example.demo.dao.DAO;
import com.example.demo.entity.Flashcard;
import com.example.demo.entity.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController

public class Ctrl {
    private final DAO dao;

    public Ctrl(DAO dao){
        this.dao = dao;
    }

    @GetMapping("/showAllCards")
    public List <Flashcard> listCards(){ return dao.showAllCards();}

    @GetMapping("/getCard/{cardID}")
    public Flashcard flashcard(@PathVariable int cardID){
        Flashcard flashcard = dao.findID(cardID);
        if(flashcard==null){
            throw new RuntimeException("Card with that ID couldn't be found..");
        }
        return flashcard;
    }

    @DeleteMapping("/wipeAllCards")
    public String wipeCards(){
        dao.deleteAll();
        return "Deleted all the flashcards, foo";
    }

    @DeleteMapping("/deleteCard/{cardID}")
    public String deleteCard(@PathVariable int cardID){
        Flashcard flashcard = dao.findID(cardID);
        if(flashcard==null){
            throw new RuntimeException("Card with that ID couldn't be found..");
        }
        dao.deleteCard(cardID);
        return "Removed the flashcard with ID:" + cardID;
    }

    @PostMapping("/addCard")
    public Flashcard addCard(@RequestBody Flashcard flashcard){
        flashcard.setId(0);
        dao.saveCard(flashcard);
        return flashcard;
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        user.setId(0);
        dao.saveUser(user);
        return user;
    }

    @PostMapping("/verifyUser")
    public String verifier(@RequestBody User user){
        if(dao.verifyUserExists(user)){
            return "Valid user info!";
        }
        else {
            return "Invalid user info!";
        }
    }

    @PutMapping("/editCard")
    public Flashcard editCard(@RequestBody Flashcard updateCard){
        dao.saveCard(updateCard);
        System.out.println("Updated the card");
        return updateCard;
    }

    @PutMapping("/editUser")
    public User editUser(@RequestBody User updateUser){
        dao.saveUser(updateUser);
        System.out.println("Updated user login info");
        return updateUser;
    }
}

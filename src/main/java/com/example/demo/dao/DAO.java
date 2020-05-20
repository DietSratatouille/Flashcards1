package com.example.demo.dao;

import com.example.demo.entity.Flashcard;
import com.example.demo.entity.User;

import java.util.List;

public interface DAO {
    List<Flashcard> showAllCards();
    Flashcard findID(int cardID); //retrieve card by id
    //Flashcard randomCard(int cardID); //get random card (via select a random cardID ??)
    boolean verifyUserExists(User user);
    boolean verify(List<User> userList, User user);
    void saveCard(Flashcard flashcard); //update existing card
    //void saveCard(Flashcard flashcard);
    void saveUser(User user); //save user info
    void deleteCard(int cardID); //delete card by ID
    void deleteAll(); //delete all cards (primarily for wiping database during testing & demo)

}

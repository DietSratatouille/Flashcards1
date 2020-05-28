package com.example.demo.dao;

import com.example.demo.entity.Flashcard;
import com.example.demo.entity.User;

import java.util.List;

public interface DAO {
    List<Flashcard> showAllCards();
    Flashcard findID(int cardID); //retrieve card by id
    User findUserID(int userID);
    boolean verifyUserExists(User user);
    boolean verify(List<User> userList, User user);
    void saveCard(Flashcard flashcard); //update existing card
    void saveUser(User user); //save user info
    void deleteCard(int cardID); //delete card by ID
    void deleteUser(int userID);
    void deleteAll(); //delete all cards (primarily for wiping database during testing & demo)

    String displayCardQuestion(int cardID); //displays just the question of a respective Flashcard
    String displayCardAnswer(int CardID); //displays just the answer of a respective Flashcard
    Flashcard randomCard(); //get random card (via select a random cardID ??)

}

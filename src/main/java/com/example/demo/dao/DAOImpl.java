package com.example.demo.dao;

import com.example.demo.entity.Flashcard;
import com.example.demo.entity.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Random;

@Repository
public class DAOImpl implements DAO {
    private EntityManager manager;
    private Session sesh;

    @Autowired
    public DAOImpl(EntityManager manager){this.manager=manager;}

    @Override
    @Transactional
    public List<Flashcard> showAllCards() {
        sesh = manager.unwrap(Session.class);
        //Query<Flashcard> query = sesh.createQuery("from Flashcard");
        return sesh.createQuery("from Flashcard").getResultList(); //query.getResultList();
    }

    @Override
    @Transactional
    public Flashcard findID(int cardID) {
        sesh = manager.unwrap(Session.class);
        Flashcard flashcard = sesh.get(Flashcard.class, cardID);
        return flashcard;
    }

    @Override
    @Transactional
    public User findUserID(int userID) {
        sesh = manager.unwrap(Session.class);
        User user = sesh.get(User.class, userID);
        return user;

    }

    @Override
    @Transactional
    public boolean verifyUserExists(User user) {
        sesh = manager.unwrap(Session.class);
        List <User> usersList = sesh.createQuery("from User").list();
        return verify(usersList, user);
    }

    @Override
    @Transactional
    public boolean verify(List<User> userList, User user) {
        for(User tmp:userList){
            if(user.getUsername().equals(tmp.getUsername())) {
                if(user.getPassword().equals(tmp.getPassword())) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    @Transactional
    public void saveCard(Flashcard flashcard) {
        sesh = manager.unwrap(Session.class);
                sesh.saveOrUpdate(flashcard);
    }

    @Override
    @Transactional
    public void saveUser(User user) {
        sesh = manager.unwrap(Session.class);
        sesh.saveOrUpdate(user);
    }

    @Override
    @Transactional
    public void deleteCard(int cardID) {
        sesh = manager.unwrap(Session.class);
        Flashcard flashcard = sesh.get(Flashcard.class, cardID);
        sesh.delete(flashcard);
    }

    @Override
    @Transactional
    public void deleteUser(int userID) {
        sesh = manager.unwrap(Session.class);
        User user = sesh.get(User.class, userID);
        sesh.delete(user);
    }

    @Override
    @Transactional
    public void deleteAll() {
        sesh = manager.unwrap(Session.class);
        //sesh.createQuery("truncate table Flashcard").executeUpdate();
        sesh.createSQLQuery("truncate table Flashcard").executeUpdate();
    }

    @Override
    @Transactional
    public String displayCardQuestion(int cardID) {
        sesh = manager.unwrap(Session.class);
        Flashcard flashcard = sesh.get(Flashcard.class, cardID);
        return  flashcard.getQuestion();
    }

    @Override
    @Transactional
    public String displayCardAnswer(int cardID) {
        sesh = manager.unwrap(Session.class);
        Flashcard flashcard = sesh.get(Flashcard.class, cardID);
        return flashcard.getAnswer();
    }

    @Override
    @Transactional
    public Flashcard randomCard() {
        sesh = manager.unwrap(Session.class);
        List <Flashcard> tmpList = sesh.createQuery("from Flashcard").getResultList();


        int randID = new Random().nextInt(tmpList.size()+1);
        //cardID = randID;
        System.out.println(randID);


        Flashcard flashcard = sesh.get(Flashcard.class,randID);
        System.out.println(flashcard);

        return flashcard;
    }
}

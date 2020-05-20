package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name="flashcard")
public class Flashcard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="question")
    private String question;

    @Column(name="answer")
    private String answer;

    public Flashcard(String question, String answer){
        this.question = question;
        this.answer = answer;
    }
    //empty constructor bs
    public Flashcard(){}
    //getters
    public int getId(){return id;}
    public String getQuestion(){return question;}
    public String getAnswer(){return answer;}
    //setters
    public void setId(int id){this.id = id;}
    public void setQuestion(String question){this.question = question;}
    public void setAnswer(String answer) {this.answer = answer;}

    @Override
    public String toString(){
        return "Flashcard{" +
                "Question:" + question +
                ",Answer:" + answer +
                "}";
    }
}

package com.example.demo.entity;
import javax.persistence.*;
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    public User(String username, String password){
        this.username = username;
        this.password = password;
    }
    //empty constructor
    public User(){}
    //getters
    public int getId(){return id;}
    public String getUsername(){return username;}
    public String getPassword(){return password;}
    //setters

    public void setId(int id){this.id = id;}
    public void setUsername(String username){this.username = username;}
    public void setPassword(String password){this.password = password;}

    @Override
    public String toString(){
        return "User {"+
                "username:" + username +
                ",password:" + password +
                "}";
    }
}

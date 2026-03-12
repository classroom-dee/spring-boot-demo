// YES SQL ALCHEMY ORMMMMMMMMMMMMMMMMMMMM

package com.example.spring_boot_demo.note;

import jakarta.persistence.*;

@Entity
public class Note {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    
    public Note() {}

    public Note(String content) {
        this.content = content;
    }

    public Long getId() { return id; }
    public String getContent() { return content; }

    public void setContent(String content) {
        this.content = content;
    }
}

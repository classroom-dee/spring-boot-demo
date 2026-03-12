package com.example.spring_boot_demo.note;

import org.springframework.data.jpa.repository.JpaRepository;

// this is the declarative base in sqlalchemy orm
public interface NoteRepository extends JpaRepository<Note, Long> {
    
}

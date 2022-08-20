package com.example.demo.student;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class StudentService {
    public List<Student> getStudent() {

        return List.of(
                new Student(
                        1L,
                        "Maria",
                        "maria@gmail.com",
                        13,
                        LocalDate.of(2002, Month.JANUARY, 12)

                )

        );
    }
}

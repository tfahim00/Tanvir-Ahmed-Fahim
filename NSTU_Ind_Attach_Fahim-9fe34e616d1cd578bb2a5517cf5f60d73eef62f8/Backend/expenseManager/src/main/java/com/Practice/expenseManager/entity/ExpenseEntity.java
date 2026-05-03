package com.Practice.expenseManager.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "expense_table")
public class ExpenseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String expenseId ;
    private String expenseCategory;
    private String expenseName;
    private LocalDate date;
    private String description;
    private Double amount;
}

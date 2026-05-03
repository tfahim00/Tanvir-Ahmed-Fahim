package com.Practice.expenseManager.dto.requestDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter

public class ExpenseRequestDto {
    private String expenseCategory;
    private String expenseName;
    private LocalDate date;
    private String description;
    private Double amount;
}

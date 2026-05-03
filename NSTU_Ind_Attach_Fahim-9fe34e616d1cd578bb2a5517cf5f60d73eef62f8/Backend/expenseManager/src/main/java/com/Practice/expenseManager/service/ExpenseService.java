package com.Practice.expenseManager.service;

import com.Practice.expenseManager.dto.requestDto.ExpenseRequestDto;
import com.Practice.expenseManager.entity.ExpenseEntity;
import com.Practice.expenseManager.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public String createExpense(ExpenseRequestDto requestDto){
        if(requestDto!= null){
            ExpenseEntity expense = new ExpenseEntity();
            expense.setExpenseCategory(requestDto.getExpenseCategory());
            expense.setExpenseName(requestDto.getExpenseName());
            expense.setDescription(requestDto.getDescription());
            expense.setDate(requestDto.getDate());
            expense.setAmount(requestDto.getAmount());
            expenseRepository.save(expense);
            return "Expense Created";
        }
        else return "Unable to Create Expense Entity";
    }

    public List<ExpenseEntity> getAllExpense(){
        return expenseRepository.findAll();
    }
}

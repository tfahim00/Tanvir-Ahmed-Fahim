import React, { useEffect, useState } from 'react';
import './expense_page.css';

const ExpensePage = () => {
    const [newExpense, setNewExpense] = useState({
        expenseCategory: '',
        expenseName: '',
        description: '',
        date: '',
        amount: ''
    });

    const [expenses, setExpenses] = useState([]);

  const fetchData = () => {
    try {
      fetch("http://localhost:8080/expense-manager/get-all-expense", {
        method: 'GET'
      })
        .then(response => response.json())
        .then(result => setExpenses(result) )
        .catch(error => console.log('error', error));
    }
    catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
  fetchData();
},[])

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setNewExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newExpense)

        try {
          fetch("http://localhost:8080/expense-manager/create", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newExpense),
          })
            .then(response => response.text())
            .then(result => fetchData())
            .catch(error => console.error('Error:', error));
    
        } catch (error) {
          console.log(error)
        }
       
        setNewExpense({
            expenseCategory: '',
            expenseName: '',
            description: '',
            date: '',
            amount: ''
        });

       
    };

    return (
        <div className="container">
            <h2>Expense Table</h2>
            <form onSubmit={handleSubmit} className="expense-form">
                <label>
                    Expense Category:
                    <select name="expenseCategory" onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Bills">Bills</option>
                    </select>
                </label>
                <label>
                    Expense Name:
                    <input type="text" name="expenseName" value={newExpense.expenseName} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={newExpense.description} onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={newExpense.date} onChange={handleChange} />
                </label>
                <label>
                    Amount:
                    <input type="number" name="amount" value={newExpense.amount} onChange={handleChange} />
                </label>
                <button type="submit">Add Expense</button>
            </form>
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Expense Category</th>
                        <th>Expense Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.expenseCategory}</td>
                            <td>{expense.expenseName}</td>
                            <td>{expense.description}</td>
                            <td>{expense.date}</td>
                            <td>{expense.amount}$</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpensePage;
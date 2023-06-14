import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";
import './Expense.css';

const Expense = (props) => {

    /*filteredExpenses.map((exp) => {
        return (
            <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
        );
    })*/

    const [filteredYear, setFilteredYear] = useState('2020');

    const selectYearHandler = (dropDownData) => {
        setFilteredYear(dropDownData);
    };

    const filteredExpenses = props.expenses.filter((exp) => {
        const year = new Date(exp.date).getFullYear().toString();
        return year===filteredYear; 
    })

    let expensesContent = <h2 style={{textAlign: 'center', color: 'white'}}>No expenses found.</h2>

    if(filteredExpenses.length > 0){
        expensesContent =  filteredExpenses.map((exp) => {
            return (
                <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
            );
        })
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter select={filteredYear} onSelectYear={selectYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {expensesContent}
            </Card>
        </div>
    );


};

export default Expense;
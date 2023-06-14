import {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {

    const [isEditing, isSetEditing] = useState(false);

    const showForm = () => {
        isSetEditing(true);
    }

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        isSetEditing(false);
    };

    const setEditUpdate = () => {
        isSetEditing(false);
    };

    return (
        <div className="new-expense"> 
            {!isEditing && <button onClick={showForm}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onSetUpdate = {setEditUpdate} />}
        </div>
    );
};

export default NewExpense;
import {useState} from 'react';
import Expense from './components/Expenses/Expense';
//import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpenses/NewExpense';
import './App.css';

const App = () => {

  const [expenses, setExpenses] = useState([]);

  /*const expenses = [
    {
      id: 'e1',
      title: 'Office papers',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.12,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];*/

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;

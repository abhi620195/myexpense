// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';

let DUMMY_EXPENSE = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//     LocationOfExpenditure : 'Mumbai',
//   },

//   {
//     id: 'e2',
//     title: 'New TV',
//     amount: 794.12,
//     date: new Date(2020, 7, 12),
//     LocationOfExpenditure : 'Delhi',
//   },

//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.12,
//     date: new Date(2020, 2, 28),
//     LocationOfExpenditure : 'Banglore',
//   },

//   {
//     id: 'e4',
//     title: 'Wooden',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//     LocationOfExpenditure : 'Bihar',
//   },
];


const App = () => { 

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;

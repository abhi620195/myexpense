import ExpenseItem from './components/ExpenseItem';

function App(){

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure : 'Mumbai',
    },

    {
      id: 'e2',
      title: 'New TV',
      amount: 794.12,
      date: new Date(2020, 7, 12),
      LocationOfExpenditure : 'Delhi',
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.12,
      date: new Date(2020, 2, 28),
      LocationOfExpenditure : 'Banglore',
    },

    {
      id: 'e4',
      title: 'Wooden',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure : 'Bihar',
    },
];

  return(
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} LocationOfExpenditure={expenses[0].LocationOfExpenditure}/>
      
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} LocationOfExpenditure={expenses[1].LocationOfExpenditure}/>
      
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} LocationOfExpenditure={expenses[2].LocationOfExpenditure}/>
      
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} LocationOfExpenditure={expenses[3].LocationOfExpenditure}/>
    </div>
  )
}

export default App;

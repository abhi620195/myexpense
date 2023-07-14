// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;

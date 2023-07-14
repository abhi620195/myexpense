import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const deleteExpense = () =>{
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />
            <button onClick={deleteExpense}>Delete Expenses</button>
        </Card>
    )
}

export default ExpenseItem;
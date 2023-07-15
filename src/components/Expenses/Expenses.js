import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter 
                selected={filteredYear} 
                onChangeFilter ={filterChangeHandler} />
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
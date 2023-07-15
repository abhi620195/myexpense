import React from "react";
import './ExpenseFilter.css';


const ExpenseFilter = (props) =>{
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expense-filter__control">
                <label className="label">Filter by year</label>
                <select className="select" value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter; 
import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () =>
{
    return (
        <form>
            <div className="new-expense__controls">
                <div>
                    <lebel className="label">Title</lebel>
                    <input className="input" type="text" />
                </div>

                <div>
                    <lebel className="label" >Amount</lebel>
                    <input className="input" type="number" min="0.01" step ="0.01" />
                </div>

                <div>
                    <lebel className="label">Date</lebel>
                    <input className="input" type="date" min='2019-01-01' max="2023-12-31" />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
import React from 'react';
import ExpenseListItem from './ExpenseListItem';



export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? <p>No expense to show</p>
                : props.expenses.map((expense)=>{
            return(
                <ExpenseListItem key = {expense.id} {...expense}/>
                    );       
            })
        }
    </div>
);



export default ExpenseList;
import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from './../actions/expenses.js';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'


const ExpenseListItem = ( {dispatch ,id ,description, amount, createdAt}) =>{
    return(
        <div>
            <Link to={`/edit/${id}`} >{description}</Link>
            <p>Amount: {amount/100} and createdAt: {createdAt}</p>

        </div>
    );
}   

export default ExpenseListItem;
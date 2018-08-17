import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from './../actions/expenses.js';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ( {id ,description, amount, createdAt}) =>{
    return(
        <div>
            <Link to={`/edit/${id}`} >{description}</Link>
            <p>
                Amount: {numeral(amount / 100).format('$0,0.00')} and 
                createdAt: {moment(createdAt).format('MMMM Do, YYYY')}</p>

        </div>
    );
}   

export default ExpenseListItem;
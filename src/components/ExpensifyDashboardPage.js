import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters.js'


const ExpensifyDashboardPage = () =>{
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    );
};

export default ExpensifyDashboardPage;
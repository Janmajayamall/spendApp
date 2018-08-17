import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {ExpenseList} from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters.js';
import ExpenseSummaryComponent from './ExpenseSummaryComponent.js';
import { connect } from 'react-redux';
import selectExpenses from './../selectors/expenses.js';


export const ExpensifyDashboardPage = (props) =>{

        return (
            <div>
                <ExpenseSummaryComponent expenses = {props.expenses} />
                <ExpenseListFilters/>
                <ExpenseList expenses = {props.expenses}/>
            </div>
        );}


const mapStateToProps = (state, props)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpensifyDashboardPage);
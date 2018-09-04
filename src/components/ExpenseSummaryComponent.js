import React from 'react';
import getTotalExpenses from './../selectors/expensesTotal.js';
import numeral from 'numeral' 
import {Link} from 'react-router-dom';


export default class ExpenseSummaryComponent extends React.Component{
    render(){
        const expenseSING = this.props.expenses.length === 1 ? 'expense' : 'expenses';
        return(
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Viewing <span>{this.props.expenses.length}</span> {expenseSING} totalling <span>{numeral(getTotalExpenses(this.props.expenses)/100).format('$0,0.00')}</span></h1> 
                <div className='page-header__actions'>
                    <Link className='button' to='/create' >Add Spending</Link>
                </div>
                </div>
            </div>
        );
    }
}


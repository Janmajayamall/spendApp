import React from 'react';
import getTotalExpenses from './../selectors/expensesTotal.js';
import numeral from 'numeral'


export default class ExpenseSummaryComponent extends React.Component{
    render(){
        const expenseSING = this.props.expenses.length === 1 ? 'expense' : 'expenses';
        return(
            <div>
                <p>Viewing {this.props.expenses.length} {expenseSING} totalling {numeral(getTotalExpenses(this.props.expenses)/100).format('$0,0.00')}</p> 
            </div>
        );
    }
}


import React from 'react'
import {shallow} from 'enzyme';
import {AddExpensePage} from './../../components/AddExpense.js';
import expenses from '../fixtures/expenses.js';


let startAddExpense, wrapper, history;

beforeEach(()=>{
    startAddExpense = jest.fn();
     history = {push:jest.fn()};
     wrapper = shallow(<AddExpensePage startAddExpense = {startAddExpense} history={history}/>);
});

test('it should render AddExpense Page properly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});
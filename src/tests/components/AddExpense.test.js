import React from 'react'
import {shallow} from 'enzyme';
import {AddExpensePage} from './../../components/AddExpense.js';
import { wrap } from 'module';
import expenses from '../fixtures/expenses.js';


let addExpense, wrapper, history;

beforeEach(()=>{
    addExpense = jest.fn();
     history = {push:jest.fn()};
     wrapper = shallow(<AddExpensePage addExpense = {addExpense} history={history}/>);
});

test('it should render AddExpense Page properly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
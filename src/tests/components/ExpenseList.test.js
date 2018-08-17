import React from 'react';
import {ExpenseList} from './../../components/ExpenseList';
import {shallow} from 'enzyme';
import expenses from './../fixtures/expenses.js'

test('should render ExpenseList with expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should rednder ExpenseList with empty message', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseSummaryComponent from './../../components/ExpenseSummaryComponent';
import expenses, {expenseSingle} from './../fixtures/expenses.js';

test('should render expense with 1 expense properly', ()=>{
    const wrapper = shallow(<ExpenseSummaryComponent expenses={expenseSingle}/>);
    expect(wrapper).toMatchSnapshot();

});

test('should render mutiple expenses properly', ()=>{
    const wrapper = shallow(<ExpenseSummaryComponent expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});
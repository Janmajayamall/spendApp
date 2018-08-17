import React from 'react';
import {shallow} from 'enzyme';
import {ExpensifyDashboardPage} from './../../components/ExpensifyDashboardPage.js';
import expenses from './../fixtures/expenses.js';

test('should render dashboard page', ()=>{
    const wrapper = shallow(<ExpensifyDashboardPage expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});
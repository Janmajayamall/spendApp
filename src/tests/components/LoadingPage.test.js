import React from 'react';
import {shallow} from 'enzyme';
import LoadingPage from './../../components/LoadingPage.js';

test('it should render Loading page correctly', ()=>{
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
})
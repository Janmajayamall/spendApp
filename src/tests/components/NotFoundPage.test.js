import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from './../../components/NotFoundPage.js';

test('should show not found 404 error page', () =>{
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();

})
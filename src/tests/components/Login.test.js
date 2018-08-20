import {LoginPage} from './../../components/Login';
import {shallow} from 'enzyme';
import React from 'react';



test('Login Page should render properly', ()=>{
    const wrapper = shallow(<LoginPage startLogin={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should call startLogin function properly', ()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
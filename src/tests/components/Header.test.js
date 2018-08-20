import React from 'react';
import {Header} from './../../components/Header.js';
import {shallow} from 'enzyme';

test('should render header correctly', ()=>{
    const wrapper = shallow(<Header startLogout={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    
});

test('should startLogout function properly', ()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled(); 
})
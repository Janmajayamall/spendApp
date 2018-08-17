import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from './../../components/Header.js';
import {shallow} from 'enzyme';
import { wrap } from 'module';

test('should render header correctly', ()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    
});
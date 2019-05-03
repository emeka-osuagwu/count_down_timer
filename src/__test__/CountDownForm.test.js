import React from 'react';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import CountDownForm from '../components/CountDownForm';

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
	wrapper = mount(<CountDownForm />);
})

it('should show input',()=>{
	expect(wrapper.find('input').length).toEqual(1);
});

it('should show play button',()=>{
	wrapper.setProps({ countdownStatus: 'stopped' });
	expect(wrapper.find('button').length).toEqual(1);
	expect(wrapper.find('button').text()).toEqual('START');
});

it('should show stop button', ()=>{
	wrapper.setProps({ countdownStatus: 'play' });
	expect(wrapper.find('button').length).toEqual(1);
	expect(wrapper.find('button').text()).toEqual('STOP');
});
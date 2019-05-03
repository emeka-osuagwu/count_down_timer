import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import CountDown from '../components/CountDown';

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
	wrapper = mount(<CountDown />);
})

it('should show right count down min and sec',()=>{
	wrapper.setProps({ sec: 100});
	expect(wrapper.text()).toEqual('01:40');
});

it('should show pause button',()=>{
	wrapper.setProps({ countdownStatus: 'play'});
	expect(wrapper.find('i').hasClass('fa-pause-circle')).toEqual(true);
});

it('should show play button',()=>{
	wrapper.setProps({ countdownStatus: 'paused'});
	expect(wrapper.find('i').hasClass('fa-play-circle')).toEqual(true);
});

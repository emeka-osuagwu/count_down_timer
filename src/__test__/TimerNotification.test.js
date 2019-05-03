import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import TimerNotification from '../components/TimerNotification';

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
	wrapper = mount(<TimerNotification />);
})

it('should show p tag',()=>{
	expect(wrapper.find('p').hasClass('card-text')).toEqual(true);
});

it('should show p tag',()=>{
	wrapper.setProps({status: "custom text will show"})
	expect(wrapper.fid('p').text()).toEqual('custom text will show');
});

import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

configure({ adapter: new Adapter() });

let wrapper;
let instance;

beforeEach(() => {
	wrapper = mount(<App />);
	instance = wrapper.instance();
})

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should show error when value not passed', () => {
	window.alert = jest.fn();
	spyOn(instance, 'changeStatus').and.callThrough();
	expect(instance.changeStatus('start'));
	expect(window.alert).toHaveBeenCalledWith('please enter a value')
});

it('should play when play value is passed', () => {
	spyOn(instance, 'changeStatus').and.callThrough();
	expect(instance.changeStatus('play'));
	expect(wrapper.state().countdownStatus).toEqual('play')
});

it('should stop when stopped value is passed', () => {
	spyOn(instance, 'changeStatus').and.callThrough();
	expect(instance.changeStatus('stopped'));
	expect(wrapper.state().countdownStatus).toEqual('stopped')
	expect(wrapper.state().count).toEqual(0)
});

it('should reset count to 0 when stopped', () => {
	spyOn(instance, 'changeStatus').and.callThrough();
	expect(instance.changeStatus('stopped'));
	expect(wrapper.state().count).toEqual(0)
});

it('should paused when paused value is passed', () => {
	spyOn(instance, 'changeStatus').and.callThrough();
	expect(instance.changeStatus('paused'));
	expect(wrapper.state().countdownStatus).toEqual('paused')
});

it('should speed up timer', () => {
	spyOn(instance, 'speedUp').and.callThrough();
	expect(instance.speedUp(100));
	expect(wrapper.state().speed).toEqual(100)
});



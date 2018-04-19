import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
	let app = mount(<App />);

	it('renders the App title', () => {
		//console.log(app.debug());
		expect(app.find('h2').text()).toEqual('Note to Self');
	});

	it('renders the clear button', () => {
		expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
	});
});

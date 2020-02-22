import React from 'react';
import { shallow } from 'enzyme';
import Watch from '../Watch';

describe('Renders NextUpVideo component', () => {
	test('renders', () => {
		const wrapper = shallow(<Watch />);
		expect(wrapper).toMatchSnapshot();
	});
});

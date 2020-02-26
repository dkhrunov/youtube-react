import React from 'react';
import { shallow } from 'enzyme';
import AddComment from '../AddComment';

describe('Renders AddComment component', () => {
	test('renders', () => {
		const wrapper = shallow(<AddComment />);
		expect(wrapper).toMatchSnapshot();
	});
});

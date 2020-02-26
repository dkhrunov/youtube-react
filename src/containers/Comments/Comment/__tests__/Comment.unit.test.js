import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../Comment';

describe('Renders Comment component', () => {
	test('renders', () => {
		const wrapper = shallow(<Comment />);
		expect(wrapper).toMatchSnapshot();
	});
});

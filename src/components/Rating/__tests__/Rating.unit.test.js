import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../Rating';

describe('Renders Rating component', () => {
	test('renders without props', () => {
		const wrapper = shallow(<Rating />);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders with likeCount props', () => {
		const wrapper = shallow(<Rating likeCount={123} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders with dislikeCount props', () => {
		const wrapper = shallow(<Rating dislikeCount={234} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders with likeCount and dislikeCount props', () => {
		const wrapper = shallow(<Rating likeCount={1003} dislikeCount={656} />);
		expect(wrapper).toMatchSnapshot();
	});
});

import React from 'react';
import { shallow } from 'enzyme';
import CommentsHeader from '../CommentsHeader';

describe('Renders CommentsHeader component', () => {
	test('renders with props.amountComments = null', () => {
		const wrapper = shallow(<CommentsHeader />);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders with props.amountComments = 123', () => {
		const wrapper = shallow(<CommentsHeader amountComments={123} />);
		expect(wrapper).toMatchSnapshot();
	});
});

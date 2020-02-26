import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../Comments';

describe('Renders Comments component', () => {
	test('renders without props', () => {
		const wrapper = shallow(<Comments />);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders with amountComments', () => {
		const wrapper = shallow(<Comments amountComments={666} />);
		expect(wrapper).toMatchSnapshot();
	});
});

import React from 'react';
import { shallow } from 'enzyme';
import VideoMetadata from '../VideoMetadata';

describe('Renders VideoMetadata component', () => {
	test('renders without props', () => {
		const wrapper = shallow(<VideoMetadata />);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders with view count', () => {
		const wrapper = shallow(<VideoMetadata viewCount={100234} />);
		expect(wrapper).toMatchSnapshot();
	});
});

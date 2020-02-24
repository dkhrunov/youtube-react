import React from 'react';
import { shallow, mount } from 'enzyme';
import VideoInfoBox from '../VideoInfoBox';

describe('Renders VideoInfoBox component', () => {
	test('renders collapsed comments block', () => {
		const wrapper = shallow(<VideoInfoBox />);
		expect(wrapper).toMatchSnapshot();
	});

	test('renders expanded comments block', () => {
		const wrapper = mount(<VideoInfoBox />);
		const button = wrapper.find('.video-description button');
		button.simulate('click');
		expect(wrapper).toMatchSnapshot();
	});
});

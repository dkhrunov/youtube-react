import React from 'react';
import { shallow } from 'enzyme';
import AppLayout from '../AppLayout';

test('renders empty <AppLAyout />', () => {
	const wrapper = shallow(<AppLayout />);
	expect(wrapper).toMatchSnapshot();
});

test('renders <AppLAyout /> with one child', () => {
	const wrapper = shallow(
		<AppLayout>
			<div>Child 1</div>
		</AppLayout>
	);
	expect(wrapper).toMatchSnapshot();
});

test('renders <AppLAyout /> with childrens', () => {
	const wrapper = shallow(
		<AppLayout>
			<div>Child</div>
			<div>
				<span>Child</span>
				<p>Child</p>
			</div>
		</AppLayout>
	);
	expect(wrapper).toMatchSnapshot();
});

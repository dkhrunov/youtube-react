import React, { Fragment } from 'react';
import './SideBarFooter.scss';

const SideBarFooter = (props) => {
	return (
		<Fragment>
			<div className='footer-block'>
				<div>About Press Copyright</div>
				<div>Creators Advertise</div>
				<div>Developers +MyTube</div>
				<div>Legal</div>
			</div>
			<div className='footer-block'>
				<div>Terms Privacy</div>
				<div>Policy & Safety</div>
				<div>Test new features</div>
			</div>
			<div className='footer-block'>
				<div>All prices include VAT</div>
			</div>
			<div className='footer-block'>
				<div>
					© github.com/therealpanda98 - A Youtube clone for educational purposes
					under fair use.
				</div>
			</div>
		</Fragment>
	);
};

export default SideBarFooter;

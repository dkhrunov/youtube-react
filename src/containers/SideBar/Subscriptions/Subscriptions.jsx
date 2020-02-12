import React, { Fragment } from 'react';
import Subscription from './Subscription/Subscription';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import { Divider } from 'semantic-ui-react';

const Subscriptions = (props) => {
	return (
		<Fragment>
			<SideBarHeader title='Subscriptions' />
			<Subscription label='MusicChannel' broadcasting />
			<Subscription label='Coursea' amountNewVideos={2} />
			<Subscription label='ExtremeCode' broadcasting />
			<Subscription label='вДудь' amountNewVideos={4} />
			<Subscription label='Dev Ed' amountNewVideos={1} />
			<Divider />
		</Fragment>
	);
};

export default Subscriptions;

import React, { Fragment } from 'react';
import SideBar from '../SideBar/SideBar';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import './Home.scss';

const Home = (props) => {
	return (
		<Fragment>
			<SideBar />
			<div className='home'>
				<div className='responsive-video-grid-container'>
					<VideoGrid title='Trending' />
					<VideoGrid title='Autos & Vencles' hideDivider={true} />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;

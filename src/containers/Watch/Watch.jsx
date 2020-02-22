import React, { Fragment } from 'react';
import './Watch.scss';
import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';

const Watch = (props) => {
	return (
		<Fragment>
			<div style={{ maxWidth: '80%' }}>
				<Video id='-7fuHEEmEjs' />
			</div>
			<RelatedVideos />
		</Fragment>
	);
};

export default Watch;

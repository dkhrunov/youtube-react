import React, { Fragment } from 'react';
import './Watch.scss';
import Video from '../../components/Video/Video';
import VideoPreview from '../../components/VideoPreview/VideoPreview';

const Watch = (props) => {
	return (
		<Fragment>
			<div style={{ maxWidth: '80%' }}>
				<Video id='-7fuHEEmEjs' />
			</div>
			<VideoPreview horizontal={true} />
			<VideoPreview />
		</Fragment>
	);
};

export default Watch;

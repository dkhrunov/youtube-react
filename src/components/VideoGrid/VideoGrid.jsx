import React, { Fragment } from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';
import { Divider } from 'semantic-ui-react';
import './VideoGrid.scss';

const VideoGrid = (props) => {
	const divider = props.hideDivider ? null : <Divider />;

	return (
		<Fragment>
			<VideoGridHeader title={props.title} />
			<div className='video-grid'>
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
				<VideoPreview />
			</div>
			{divider}
		</Fragment>
	);
};

export default VideoGrid;

import React from 'react';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import Comments from '../../containers/Comments/Comments';
import './Watch.scss';

const Watch = (props) => {
	return (
		<div className='watch-grid'>
			<Video className='video' id='-7fuHEEmEjs' />
			<VideoMetadata className='metadata' viewCount={1000} />
			<VideoInfoBox className='video-info-box' />
			<Comments className='comments' />
			<RelatedVideos className='relatedVideos' />
		</div>
	);
};

export default Watch;

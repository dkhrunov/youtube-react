import React from 'react';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import './Watch.scss';

const Watch = (props) => {
	return (
		<div className='watch-grid'>
			<Video className='video' id='-7fuHEEmEjs' />
			<div
				className='metadata'
				style={{ width: '100%', height: '100px', background: '#F91112' }}
			>
				Metadata
			</div>
			<div
				className='video-info-box'
				style={{ width: '100%', height: '100px', background: '#BD10E0' }}
			>
				Video Info box
			</div>
			<div
				className='comments'
				style={{ width: '100%', height: '100px', background: '#9013FE' }}
			>
				comments
			</div>
			<RelatedVideos className='relatedVideos' />
		</div>
	);
};

export default Watch;

import React, { useState } from 'react';
import { Image, Button } from 'semantic-ui-react';
import './VideoInfoBox.scss';

const VideoInfoBox = (props) => {
	const [collapsed, setCollapsed] = useState(true);

	const onToggleCollapseButtonClick = () => {
		setCollapsed((prevCollapsed) => !prevCollapsed);
	};

	let descriptionTextClass = collapsed ? 'collapsed' : 'expanded';
	let buttonTitle = collapsed ? 'Show More' : 'Show Less';

	return (
		<div className='video-info-box'>
			<Image
				className='channek-image'
				src='http://via.placeholder.com/48x48'
				circular
			/>
			<div className='video-info'>
				<div className='channel-name'>Channel Name</div>
				<div className='video-publication-date'>Thu 24, 2018</div>
			</div>
			<Button color='youtube'>91.5k Subscribe</Button>
			<div className='video-description'>
				<div className={descriptionTextClass}>
					<p>Paragraph 1</p>
					<p>Paragraph 2</p>
					<p>Paragraph 3</p>
					<p>Paragraph 4</p>
					<p>Paragraph 5</p>
				</div>
				<Button compact onClick={onToggleCollapseButtonClick}>
					{buttonTitle}
				</Button>
			</div>
		</div>
	);
};

export default VideoInfoBox;

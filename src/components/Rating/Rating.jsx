import React from 'react';
import { Icon, Progress } from 'semantic-ui-react';
import './Rating.scss';

function buildProgressBar(likeCount, dislikeCount) {
	const percent = 100 * (likeCount / (dislikeCount + likeCount));
	return <Progress className='progress' percent={percent} size='tiny' />;
}

const Rating = (props) => {
	const { likeCount, dislikeCount } = props;

	let progress = null;

	if (likeCount && dislikeCount) {
		progress = buildProgressBar(likeCount, dislikeCount);
	}

	return (
		<div className='rating'>
			<div className='thumbs-up'>
				<Icon name='thumbs outline up'></Icon>
				<span>{likeCount}</span>
			</div>
			<div className='thumbs-down'>
				<Icon name='thumbs outline down'></Icon>
				<span>{dislikeCount}</span>
			</div>
			{progress}
		</div>
	);
};

export default Rating;

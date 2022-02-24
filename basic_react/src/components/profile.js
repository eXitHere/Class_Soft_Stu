import { useState } from 'react';

const Profile = ({ name, studentId, text, profileImage }) => {
	const [score, setScore] = useState(0);

	const clickHandle = (e) => {
		if (e.target.id === 'vote-up') {
			if (score < 10) {
				setScore(score + 1);
			} else {
				alert('cannot vote more');
			}
		} else if (e.target.id === 'vote-down') {
			if (score > 0) {
				setScore(score - 1);
			} else {
				alert('cannot unvote');
			}
		}

		
	};

	return (
		<div>
			<div>{name}</div>
			<div>{studentId}</div>
			<div>{text}</div>
			<img src={profileImage} alt='profile' />
			<div className='flex flex-row'>
				<button className='w-30 h-30 bg-red-500' id='vote-up' onClick={clickHandle}>
					Click to Vote
				</button>
				<div className='w-30 h-30'>
					{score === 10 ? 'MAX' : score === 0 ? 'MIN' : score}
				</div>
				<div className='w-30 h-30 bg-red-500' id='vote-down' onClick={clickHandle}>
					Click to Unvote
				</div>
			</div>
		</div>
	);
};

export default Profile;

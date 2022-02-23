import Profile from './components/profile';

function App() {
	const userDate = [
		{
			name: 'Thana XXX',
			studentId: '62010381',
			text: 'asdsad',
			profile: 'https://avatars.githubusercontent.com/u/50941709?v=4',
		},
		{
			name: 'Thana XXX',
			studentId: '62010381',
			text: 'asdasdsad',
			profile: 'https://avatars.githubusercontent.com/u/50941709?v=4',
		},
	];

	return (
		<div className=''>
			{userDate.map((e, idx) => (
				<Profile
					name={e.name}
					studentId={e.studentId}
					text={e.text}
					key={idx}
					profileImage={e.profile}
				></Profile>
			))}
		</div>
	);
}

export default App;

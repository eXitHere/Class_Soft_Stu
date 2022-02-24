import Profile from './components/profile';

function App() {
	const userDate = [
		{
			name: 'Thanakorn Chancherngpanich',
			studentId: '62010336',
			text: 'asdsad',
			profile: 'https://avatars.githubusercontent.com/u/57614928?v=4',
		},
		{
			name: 'Thanadol Sinananvanich',
			studentId: '62010345',
			text: 'asdasdsad',
			profile: 'https://avatars.githubusercontent.com/u/40865904?v=4',
		},
		{
			name: 'Thana Tingprasom',
			studentId: '62010381',
			text: 'asdsad',
			profile: 'https://avatars.githubusercontent.com/u/39361943?v=4',
		},
		{
			name: 'Prachya Thongsan',
			studentId: '62010533',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nihil voluptatem aperiam suscipit, temporibus nam ea fugiat eveniet voluptates quo quam earum iste vel eum esse deserunt molestias maiores sed?',
			profile: 'https://avatars.githubusercontent.com/u/70775537?v=4',
		},
		{
			name: 'Paratthakorn Sribunyong',
			studentId: '62010535',
			text: 'asdasdsad',
			profile: 'https://avatars.githubusercontent.com/u/50941709?v=4',
		}
	];
	
	return (
		
		<div className='container'>
		
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

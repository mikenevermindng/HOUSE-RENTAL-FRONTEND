import { useEffect } from 'react';
import './App.css';
import Slider from './Components/Slider/Slider';

function App() {
	let slides = [
		{
			background: 'https://www.w3schools.com/w3images/coffee.jpg',
			text: 'Coffee'
		},
		{
			background: 'https://www.w3schools.com/w3images/workbench.jpg',
			text: 'Workbench'
		},
		{
			background: 'https://www.w3schools.com/w3images/sound.jpg',
			text: 'Sound'
		}
	];
	return (
		<div className="App">
			<div style={{ maxHeight: '500px', maxWidth: '500px' }}>
				<Slider slides={slides} />
			</div>
		</div>
	);
}

export default App;

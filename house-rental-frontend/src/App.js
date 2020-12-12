import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import CustomSelector from './Components/CustomSelectorWithInputText/CustomSelectorWithInput';

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
			<Navbar />
			<SearchPanel />
		</div>
	);
}

export default App;

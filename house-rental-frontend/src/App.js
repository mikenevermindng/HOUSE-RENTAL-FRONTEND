import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import MobileSearchPanel from './Components/MobileSearchPanel/MobileSearchPanel';
import PosterCreator from './Components/PosterCreator/PosterCreator';

function App() {
	return (
		<div className="App">
			<Navbar />
			<SearchPanel />
			<PosterCreator />
		</div>
	);
}

export default App;

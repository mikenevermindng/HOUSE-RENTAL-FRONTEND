import { useEffect } from 'react';
import './App.css';
import { setPosterList, addPoster, removePoster, modifyPoster } from './Store/ActionCreator/posterActionCreator';
import { useSelector, useDispatch } from 'react-redux';
import LocationAutocompleteInput from './Components/LocationInput/LocationAutocompleteInput';

function App() {
	return (
		<div className="App">
			<LocationAutocompleteInput />
		</div>
	);
}

export default App;

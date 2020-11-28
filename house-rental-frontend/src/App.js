import { useEffect } from 'react';
import './App.css';
import { setPosterList, addPoster, removePoster, modifyPoster } from './Store/ActionCreator/posterActionCreator';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const poster = useSelector((state) => state.posters);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPosterList([ 'this is 1', 'this is 2' ]));
		dispatch(addPoster({ content: 'this is the third', _id: 1 }));
		dispatch(removePoster(1));
		console.log(poster);
		return () => {};
	}, []);

	return <div className="App" />;
}

export default App;

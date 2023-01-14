import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBreeds } from './store/breeds-reducer';
import { App } from './App';
import { breedsSelector } from './store/selectors';
import { useLocation } from 'react-router-dom';

export const AppContainer = () => {

	const pathName = useLocation().pathname;

	const dispatch = useDispatch();

	const breeds = useSelector(breedsSelector);

	useEffect(() => {
		dispatch(getBreeds());
	}, []);

	return (
		<App breeds={breeds} pathName={pathName} />
	);
};

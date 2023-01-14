import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { breedsSelector } from '../store/selectors';
import { changeInput, changeInputFocus, changeSearchFor, setFoundBreeds, setFoundBreedsToRender } from '../store/search-reducer';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const SearchBarContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const breeds = useSelector(breedsSelector);
    const foundBreeds = useSelector(state => state.search.foundBreeds);
    const searchInput = useSelector(state => state.search.searchInput);
    const searchInputFocus = useSelector(state => state.search.searchInputFocus);

    const handlerSearchInput = (event) => {
        dispatch(changeInput(event.target.value));
    };

    const handlerChangeSearchInputFocus = (focus) => {
        dispatch(changeInputFocus(focus));
    };

    const findBreeds = () => {
        if (breeds.length !== 0 && searchInput && searchInput !== ' ') {
            return breeds.filter(breed => breed.name.toLowerCase().includes(searchInput.toLowerCase()));
        };
    };

    const handlerClickResult = (breedId) => {
        const breed = breeds.filter(breed => breed.id === breedId);
        dispatch(setFoundBreedsToRender(breed));
        dispatch(changeSearchFor(breed[0].name));
        dispatch(changeInput(''));
        navigate('/search');
    };

    const handlerEnterResult = (event) => {
        if (event.key === 'Enter' && searchInput && searchInput !== ' ') {
            dispatch(changeSearchFor(searchInput));
            dispatch(setFoundBreedsToRender(foundBreeds));
            dispatch(changeInput(''));
            navigate('/search');
        };
    };

    useEffect(() => {
        dispatch(setFoundBreeds(findBreeds()));
        console.log(foundBreeds);
    }, [searchInput]);

    return (
        <SearchBar
            handlerSearchInput={handlerSearchInput}
            handlerClickResult={handlerClickResult}
            handlerEnterResult={handlerEnterResult}
            foundBreeds={foundBreeds}
            searchInput={searchInput}
            searchInputFocus={searchInputFocus}
            handlerChangeSearchInputFocus={handlerChangeSearchInputFocus}
        />
    );
};

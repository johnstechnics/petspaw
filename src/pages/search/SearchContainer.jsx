import { useSelector } from 'react-redux';
import { Search } from './Search';

export const SearchContainer = () => {

    const searchFor = useSelector(state => state.search.searchFor);
    const foundBreedsToRender = useSelector(state => state.search.foundBreedsToRender);

    return (
        <Search
            searchFor={searchFor}
            foundBreedsToRender={foundBreedsToRender}
        />
    );
};

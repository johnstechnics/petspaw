import { useLocation } from 'react-router-dom';
import { SearchImgPatternItem } from './SearchImgPatternItem';

export const SearchImgPattern = (props) => {

    const currentPage = useLocation().pathname.slice(1);
    
	return (
		<div className={`img__pattern ${currentPage}`}>
            {props.clickSearchResult.map(breed => (
                <SearchImgPatternItem 
                    key={breed.id}
                    breed={breed} 
                    handlerCurrentBreed={props.handlerCurrentBreed} 
                />
            ))}
        </div>
	)
};

import { useLocation } from 'react-router-dom';
import { FavouritesImgPatternItem } from './FavouritesImgPatternItem';

export const FavouritesImgPattern = (props) => {

    const currentPage = useLocation().pathname.slice(1);

	return (
        <div className={`img__pattern ${currentPage}`}>
            {props.favourites.map(favourite => (
                <FavouritesImgPatternItem 
                    key={favourite.id} 
                    favourite={favourite} 
                    deleteFavourite={props.deleteFavourite} 
                />
            ))}
        </div>
	)
};

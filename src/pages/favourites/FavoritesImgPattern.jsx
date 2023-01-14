import { useLocation } from 'react-router-dom';
import { FavoritesImgPatternItem } from './FavoritesImgPatternItem';

export const FavoritesImgPattern = (props) => {

    console.log(props);
    const currentPage = useLocation().pathname.slice(1);

    return (
        <div className={`img__pattern ${currentPage}`}>
            {props.favorites.map(favorite => (
                <FavoritesImgPatternItem
                    key={favorite.id}
                    favorite={favorite}
                    deleteFromFavoritesThunk={props.deleteFromFavoritesThunk}
                />
            ))}
        </div>
    )
};

import { useEffect } from 'react';
import { FavoritesPage } from './FavoritesPage';

export const FavoritesGetData = (props) => {

    // console.log(props);

    useEffect(() => {
        props.getFavoritesThunk();
    }, [props.isDeleteFromFavoritesSuccess]);

    return (
        <FavoritesPage
            favorites={props.favorites}
            deleteFromFavoritesThunk={props.deleteFromFavoritesThunk}
            isDeleteFromFavoritesSuccess={props.isDeleteFromFavoritesSuccess}
            isGetFavoritesSuccess={props.isGetFavoritesSuccess}
        />
    );
};

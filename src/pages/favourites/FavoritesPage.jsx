import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FavoritesImgPattern } from './FavoritesImgPattern';
import { NoItems } from '../../components/NoItems';
import { Loader } from "../../components/Loader";

export const FavoritesPage = (props) => {
    return (
        <div className="favorites page">
            <div className="page__content">
                <div className="page__options">
                    <Breadcrumbs currentPage={'favorites'} />
                </div>
                {props.favorites.length === 0 ? (
                    props.isGetFavoritesSuccess.status ? (
                        <NoItems />
                    ) : (
                        <Loader />
                    )
                ) : (
                    <FavoritesImgPattern
                        favorites={props.favorites}
                        deleteFromFavoritesThunk={props.deleteFromFavoritesThunk}
                    />
                )}
            </div>
        </div>
    );
};

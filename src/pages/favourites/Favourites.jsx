import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FavouritesImgPattern } from './FavouritesImgPattern';
import { NoItems } from '../../components/NoItems';
import { Loader } from "../../components/Loader";

export const Favourites = (props) => {

	const apiUrl = process.env.REACT_APP_API_URL;
	const xApiKey = process.env.REACT_APP_X_API_KEY;

    const deleteFavourite = (id) => {
        const favouritesUrl = apiUrl + `favourites/${id}`;
		fetch(favouritesUrl, {
			method: 'DELETE',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'x-api-key': xApiKey
				}
			}
		)
		.then(response => props.setIsDeleteFromFavourites(Object(response.status)))
		.catch(error => console.log(error))
	};

    return (
        <div className="favourites page">
            <div className="page__content">
                <div className="page__options">
					<Breadcrumbs />
				</div>
                {props.favourites.length === 0 ? (
                    props.favouritesFetchStatus ? (
                        <Loader />
                    ) : (
                        <NoItems />
                    )
                ) : (
                    <FavouritesImgPattern 
                        favourites={props.favourites} 
                        deleteFavourite={deleteFavourite} 
                    />
                )}
            </div>
        </div>
    )
};

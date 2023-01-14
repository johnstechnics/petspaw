import { useEffect } from 'react';
import { useState } from 'react';
import { ReactComponent as FavouriteImg } from '../../assets/img/favourite.svg';
import { ReactComponent as FavouriteSetImg } from '../../assets/img/favourite_set.svg';
import { ImageItem } from '../../components/ImageItem';

export const GalleryImgPatternItem = (props) => {

    // const [imgHasVote, setImgHasVote] = useState(null);
    // const [imgVoteId, setImgVoteId] = useState(null);

    // const API_URL = process.env.REACT_APP_API_URL;

    // const isImgHasVote = () => {
    //     let image = props.favourites.find(img => img.image_id === props.galleryImg.id);
    //     if (image) {
    //         setImgHasVote(true);
    //         setImgVoteId(image.id);
    //     }
    // };

    // const addToFavourites = () => {
    //     fetch(`${API_URL}/favourites`, {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({
    //             "image_id": props.galleryImg.id,
    //             "sub_id": "null"
    //         })
    //     })
    //         .then(response => props.setAddToFavouritesResponse(Object(response.status)))
    //         .catch(error => console.log(error))
    // };

    // const deleteFavourite = (id) => {
    //     fetch(`${API_URL}/favourites/${id}`, { method: 'DELETE' })
    //         .then(response => {
    //             props.setIsDeleteFromFavourites(Object(response.status));
    //             setImgHasVote(false);
    //         })
    //         .catch(error => console.log(error))
    // };

    // useEffect(() => {
    //     isImgHasVote();
    // }, [props.favourites]);

    return (
        <div className="img__pattern_item">
            <ImageItem
                src={props.galleryImg.url}
                alt={props.galleryImg.id}
            />
            {/* <div className="img__pattern_overlay">
                {imgHasVote ? (
                    <button
                        onClick={() => deleteFavourite(imgVoteId)}
                        title="Remove from favourites"
                        type="button"
                        className="favourites__favourites_btn"
                    >
                        <FavouriteSetImg />
                    </button>
                ) : (
                    <button
                        onClick={addToFavourites}
                        title="Add to favourites"
                        type="button"
                        className="favourites__favourites_btn"
                    >
                        <FavouriteImg />
                    </button>
                )}
            </div> */}
        </div>
    )
};

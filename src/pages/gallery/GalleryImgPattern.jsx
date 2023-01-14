import { useLocation } from 'react-router-dom';
import { GalleryImgPatternItem } from './GalleryImgPatternItem';

export const GalleryImgPattern = (props) => {

    const currentPage = useLocation().pathname.slice(1);

    return (
        <div className={`img__pattern ${currentPage}`}>
            {props.galleryImages.map(image => (
                <GalleryImgPatternItem
                    key={image.id}
                    galleryImg={image}
                    favourites={props.favourites}
                    setAddToFavouritesResponse={props.setAddToFavouritesResponse}
                    setIsDeleteFromFavourites={props.setIsDeleteFromFavourites}
                />
            ))}
        </div>
    )
};

import { useLocation } from 'react-router-dom';
import { GalleryImgPatternItem } from './GalleryImgPatternItem';

export const GalleryImgPattern = (props) => {

    const currentPage = useLocation().pathname.slice(1);
    
	return (
		<div className={`img__pattern ${currentPage}`}>
            {props.galleryImgs.map(galleryImg => (
                <GalleryImgPatternItem 
                    key={galleryImg.id} 
                    galleryImg={galleryImg} 
                    favourites={props.favourites} 
                    setAddToFavouritesResponse={props.setAddToFavouritesResponse} 
                    setIsDeleteFromFavourites={props.setIsDeleteFromFavourites} 
                />
            ))}
        </div>
	)
};

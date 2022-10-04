import { ReactComponent as FavouriteSetImg } from '../../assets/img/favourite_set.svg';
import { ImageItem } from '../../components/ImageItem';

export const FavouritesImgPatternItem = (props) => {
	return (	
        <div className="img__pattern_item">
            <ImageItem 
                src={props.favourite.image.url} 
                alt={props.favourite.image_id} 
            />         
            <div className="img__pattern_overlay">
                <button 
                    type="button" 
                    title="Remove from favourites" 
                    className="favourites__favourites_btn" 
                    onClick={() => props.deleteFavourite(props.favourite.id)}
                >
                    <FavouriteSetImg />
                </button>
            </div>
        </div>
	)
};

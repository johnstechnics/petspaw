import { ReactComponent as CloseImg } from '../../assets/img/close.svg';
import { ImageItem } from '../../components/ImageItem';

export const FavoritesImgPatternItem = (props) => (
    <div className="img__pattern_item">
        <ImageItem
            src={props.favorite.image.url}
            alt={props.favorite.image.id}
        />
        <div className="img__pattern_overlay">
            <button
                type="button"
                title="Remove from favorites"
                className="favourites__favourites_btn"
                onClick={() => props.deleteFromFavoritesThunk(props.favorite.id)}
            >
                <CloseImg />
            </button>
        </div>
    </div>
);

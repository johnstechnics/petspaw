import { ReactComponent as CloseImg } from '../../assets/img/close.svg';
import { ImageItem } from '../../components/ImageItem';

export const DislikesImgPatternItem = (props) => (
    <div className="img__pattern_item">
        <ImageItem
            src={props.dislike.image.url}
            alt={props.dislike.image.id}
        />
        <div className="img__pattern_overlay">
            <button
                type="button"
                title="Remove from dislikes"
                className="favourites__favourites_btn"
                onClick={() => props.handlerDeleteVote(props.dislike.id)}
            >
                <CloseImg />
            </button>
        </div>
    </div>
);

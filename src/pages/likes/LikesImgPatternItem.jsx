import { ReactComponent as CloseImg } from '../../assets/img/close.svg';
import { ImageItem } from '../../components/ImageItem';

export const LikesImgPatternItem = (props) => (
    <div className="img__pattern_item">
        <ImageItem
            src={props.like.image.url}
            alt={props.like.image.id}
        />
        <div className="img__pattern_overlay">
            <button
                type="button"
                title="Remove from likes"
                className="favourites__favourites_btn"
                onClick={() => props.handlerDeleteVote(props.like.id)}
            >
                <CloseImg />
            </button>
        </div>
    </div>
);

import { ReactComponent as LikeImg } from '../assets/img/like.svg';
import { ReactComponent as DislikeImg } from '../assets/img/dislike.svg';
import { ReactComponent as FavouriteImg } from '../assets/img/favourite.svg';

export const ActionLogItem = (props) => {

    const createdAt = (z) => {
        let date = new Date(props.vote.created_at);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return z(hours) + ' : ' + z(minutes);
    };

    const zero = n => n < 10 ? '0' + n : n;

    return (
        <div className="action__log_item">
            <div 
                title={new Date(props.vote.created_at)} 
                className="action__log_time"
            >
                {createdAt(zero)}
            </div>
            <div className="action__log_wrap">
                <div className="action__log_text">Image ID: </div>
                <div className="action__log_imgid">{props.vote.image_id} </div>
                <div className="action__log_action">was added to </div>
                <div className="action__log_to">
                    {props.vote.value === 1 ? (
                        'Likes'
                    ) : props.vote.value === 0 ? (
                        'Dislikes'
                    ) : !props.vote.value ? (
                        'Favourites'
                    ) : (
                        ''
                    )}
                </div>
            </div>
            {props.vote.value === 1 ? (
                <LikeImg className="action__log_likeimg" />
            ) : props.vote.value === 0 ? (
                <DislikeImg className="action__log_dislikeimg" />
            ) : !props.vote.value ? (
                <FavouriteImg className="action__log_favouriteimg" />
            ) : (
                ''
            )}
        </div>
    )
};

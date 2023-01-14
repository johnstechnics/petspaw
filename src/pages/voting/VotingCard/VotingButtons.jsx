import { ReactComponent as LikeImg } from '../../../assets/img/like.svg';
import { ReactComponent as FavouriteImg } from '../../../assets/img/favourite.svg';
import { ReactComponent as DislikeImg } from '../../../assets/img/dislike.svg';
import { VotingImg } from './VotingImg';

export const VotingButtons = (props) => {

    // console.log(props.votesAndFavorites);

    return (
        <div className="voting__btns">
            {/* {props.ImgHasVote.includes('L') ? (
                <button 
                    className="voting__like_btn voting__btn" 
                    title="This image liked" 
                    style={{cursor: 'not-allowed'}}
                >
                    <LikeImg />
                </button>
            ) : (
                <button 
                    onClick={() => {
                        props.createVote(1);
                        setImgLoaded(false);
                    }} 
                    className="voting__like_btn voting__btn" 
                    title="Like"
                >
                    <LikeImg />
                </button>
            )} */}

            <button
                onClick={() => {
                    props.dispatch(props.createVoteThunk(props.singleImage.id, 1));
                    props.dispatch(props.toggleSingleImageLoading(400));
                }}
                className="voting__like_btn voting__btn"
                title="Like"
            >
                <LikeImg />
            </button>

            {/* {props.ImgHasVote.includes('F') ? (
                <button 
                    className="voting__favourites_btn voting__btn" 
                    title="This image in favourites" 
                    style={{cursor: 'not-allowed'}}
                >
                    <FavouriteImg />
                </button>
            ) : (
                <button 
                    onClick={props.addToFavourites} 
                    className="voting__favourites_btn voting__btn" 
                    title="Add to favourites"
                >
                    <FavouriteImg />
                </button>
            )} */}
            {/* {props.ImgHasVote.includes('D') ? (
                <button 
                    className="voting__dislike_btn voting__btn" 
                    title="This image disliked" 
                    style={{cursor: 'not-allowed'}}
                >
                    <DislikeImg />
                </button>
            ) : (
                <button 
                    onClick={() => {
                        props.createVote(0);
                        setImgLoaded(false);
                    }} 
                    className="voting__dislike_btn voting__btn" 
                    title="Dislike"
                >
                    <DislikeImg />
                </button>
            )} */}
            <button
                onClick={() => { props.dispatch(props.addToFavoritesThunk(props.singleImage.id)) }}
                className="voting__favourites_btn voting__btn"
                title="Add to favourites"
            >
                <FavouriteImg />
            </button>

            <button
                onClick={() => {
                    props.dispatch(props.createVoteThunk(props.singleImage.id, 0));
                    props.dispatch(props.toggleSingleImageLoading(400));
                }}
                className="voting__dislike_btn voting__btn"
                title="Dislike"
            >
                <DislikeImg />
            </button>
        </div>
    )
};

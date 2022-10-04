import { useState } from 'react';
import { ReactComponent as LikeImg } from '../../assets/img/like.svg';
import { ReactComponent as FavouriteImg } from '../../assets/img/favourite.svg';
import { ReactComponent as DislikeImg } from '../../assets/img/dislike.svg';
import { VotingImg } from './VotingImg';

export const VotingCard = (props) => {

    const [isImgLoaded, setImgLoaded] = useState(false);

    const imgLoaded = () => {
        setImgLoaded(true);
    };

	return (
        <div className="voting__card">
            <VotingImg 
                votingImg={props.votingImg} 
                isImgLoaded={isImgLoaded} 
                setImgLoaded={setImgLoaded} 
                imgLoaded={imgLoaded} 
            />
            <div className="voting__btns">
                {props.ImgHasVote.includes('L') ? (
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
                )}
                {props.ImgHasVote.includes('F') ? (
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
                )}
                {props.ImgHasVote.includes('D') ? (
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
                )}
            </div>
        </div>
	)
};

import { VotingImg } from './VotingImg';
import { VotingButtons } from './VotingButtons';

export const VotingCard = (props) => {

    // console.log(props.votesAndFavorites);

    return (
        <div className="voting__card">
            <VotingImg
                toggleSingleImageLoading={props.toggleSingleImageLoading}
                dispatch={props.dispatch}
                votingImg={props.singleImage}
                isVotingImageLoad={props.isVotingImageLoad}
                onImageLoad={props.onImageLoad}
            />
            <VotingButtons
                dispatch={props.dispatch}
                singleImage={props.singleImage}
                createVoteThunk={props.createVoteThunk}
                addToFavoritesThunk={props.addToFavoritesThunk}
                toggleSingleImageLoading={props.toggleSingleImageLoading}
            />
        </div>
    )
};

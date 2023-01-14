import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVotesThunk, deleteVoteThunk } from '../../store/voting-reducer';
import { LikesPage } from './LikesPage';

export const LikesContainer = () => {

    const dispatch = useDispatch();

    const votes = useSelector(state => state.votingPage.votes.filter(vote => vote.value === 1));
    const isDeleteVoteSuccess = useSelector(state => state.votingPage.isDeleteVoteSuccess);
    const isGetVotesSuccess = useSelector(state => state.votingPage.isGetVotesSuccess);

    const handlerDeleteVote = (id) => {
        dispatch(deleteVoteThunk(id));
    };

    useEffect(() => {
        dispatch(getVotesThunk());
    }, [isDeleteVoteSuccess]);

    return (
        <LikesPage
            likes={votes}
            isGetVotesSuccess={isGetVotesSuccess}
            handlerDeleteVote={handlerDeleteVote}
        />
    );
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVotesThunk, deleteVoteThunk } from '../../store/voting-reducer';
import { DislikesPage } from './DislikesPage';

export const DislikesContainer = () => {

    const dispatch = useDispatch();

    const votes = useSelector(state => state.votingPage.votes.filter(vote => vote.value === 0));
    const isDeleteVoteSuccess = useSelector(state => state.votingPage.isDeleteVoteSuccess);
    const isGetVotesSuccess = useSelector(state => state.votingPage.isGetVotesSuccess);

    const handlerDeleteVote = (id) => {
        dispatch(deleteVoteThunk(id));
    };

    useEffect(() => {
        dispatch(getVotesThunk());
    }, [isDeleteVoteSuccess]);

    return (
        <DislikesPage
            dislikes={votes}
            isGetVotesSuccess={isGetVotesSuccess}
            handlerDeleteVote={handlerDeleteVote}
        />
    );
};

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VotingActions } from "./VotingActions";
import { getVotesThunk, getFavoritesThunk } from "../../../store/voting-reducer";
import {
    votesAndFavoritesSelector,
    isAddToFavoritesSuccessSelector,
    isCreateVoteSuccessSelector,
    isGetFavoritesSuccessSelector,
    isGetVotesSuccessSelector
} from "../../../store/selectors";

export const VotingActionsContainer = () => {

    // console.log(state);

    const dispatch = useDispatch();

    const votesAndFavorites = useSelector(votesAndFavoritesSelector);
    const isGetVotesSuccess = useSelector(isGetVotesSuccessSelector);
    const isGetFavoritesSuccess = useSelector(isGetFavoritesSuccessSelector);
    const isCreateVoteSuccess = useSelector(isCreateVoteSuccessSelector);
    const isAddToFavoritesSuccess = useSelector(isAddToFavoritesSuccessSelector);

    useEffect(() => {
        dispatch(getVotesThunk());
        dispatch(getFavoritesThunk());
    }, [isCreateVoteSuccess, isAddToFavoritesSuccess]);

    return (
        <VotingActions
            votesAndFavorites={votesAndFavorites}
            isGetVotesSuccess={isGetVotesSuccess}
            isGetFavoritesSuccess={isGetFavoritesSuccess}
        />
    );

};

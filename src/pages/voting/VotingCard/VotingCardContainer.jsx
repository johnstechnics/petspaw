import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VotingCard } from "./VotingCard";
import { getSingleImage, toggleSingleImageLoading, setSingleImage } from "../../../store/images-reducer";
import { createVoteThunk, addToFavoritesThunk } from "../../../store/voting-reducer";
import {
    singleImageSelector,
    isVotingImageLoadSelector,
    isCreateVoteSuccessSelector
} from "../../../store/selectors";

export const VotingCardContainer = () => {

    const dispatch = useDispatch();

    const singleImage = useSelector(singleImageSelector);
    const isVotingImageLoad = useSelector(isVotingImageLoadSelector);
    const isCreateVoteSuccess = useSelector(isCreateVoteSuccessSelector);

    const onImageLoad = () => {
        dispatch(toggleSingleImageLoading(200));
    };

    useEffect(() => {
        dispatch(getSingleImage());
        return () => dispatch(setSingleImage({}));
    }, [isCreateVoteSuccess]);

    return (
        <VotingCard
            toggleSingleImageLoading={toggleSingleImageLoading}
            isCreateVoteSuccess={isCreateVoteSuccess}
            dispatch={dispatch}
            singleImage={singleImage}
            isVotingImageLoad={isVotingImageLoad}
            createVoteThunk={createVoteThunk}
            addToFavoritesThunk={addToFavoritesThunk}
            onImageLoad={onImageLoad}
        />
    );
};

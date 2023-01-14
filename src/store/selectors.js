//-----------------------------------------------------------------------------
// images
//-----------------------------------------------------------------------------

export const singleImageSelector = state => state.imagesPage.singleImage;

export const isVotingImageLoadSelector = state => state.imagesPage.isVotingImageLoad;

//-----------------------------------------------------------------------------
// voting
//-----------------------------------------------------------------------------

export const votesAndFavoritesSelector = state => {
    let data = state.votingPage.votes.concat(state.votingPage.favorites);
    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return data;
};

export const isCreateVoteSuccessSelector = state => state.votingPage.isCreateVoteSuccess;

export const isGetVotesSuccessSelector = state => state.votingPage.isGetVotesSuccess;

export const isGetFavoritesSuccessSelector = state => state.votingPage.isGetFavoritesSuccess;

export const isAddToFavoritesSuccessSelector = state => state.votingPage.isAddToFavoritesSuccess;

//-----------------------------------------------------------------------------
// breeds
//-----------------------------------------------------------------------------

export const breedsSelector = state => state.breedsPage.breeds;

export const breedsFilteredSelector = state => state.breedsPage.breedsToRender;

export const breedsLimitSelector = state => state.breedsPage.breedsLimit;

export const breedsOrderAscSelector = state => state.breedsPage.breedsOrderAsc;

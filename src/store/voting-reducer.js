import { votingAPI } from "../api/api";

const SET_VOTES = 'SET_VOTES';
const SET_FAVORITES = 'SET_FAVORITES';
const CREATE_VOTE_SUCCESS = 'CREATE_VOTE_SUCCESS';
const DELETE_VOTE_SUCCESS = 'DELETE_VOTE_SUCCESS';
const ADD_TO_FAVORITES_SUCCESS = 'ADD_TO_FAVORITES_SUCCESS';
const DELETE_FROM_FAVORITES_SUCCESS = 'DELETE_FROM_FAVORITES_SUCCESS';

const initialState = {
    votes: [],
    favorites: [],
    isGetVotesSuccess: { status: false },
    isGetFavoritesSuccess: { status: false },
    isCreateVoteSuccess: { status: false },
    isDeleteVoteSuccess: { status: false },
    isAddToFavoritesSuccess: { status: false },
    isDeleteFromFavoritesSuccess: { status: false }
};

export const votingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VOTES:
            return {
                ...state,
                votes: [...action.votes],
                isGetVotesSuccess: { status: action.status === 200 ? true : false }
            };
        case SET_FAVORITES:
            return {
                ...state,
                favorites: [...action.favorites],
                isGetFavoritesSuccess: { status: action.status === 200 ? true : false }
            };
        case CREATE_VOTE_SUCCESS:
            return {
                ...state,
                isCreateVoteSuccess: { status: action.status === 200 ? true : false }
            };
        case DELETE_VOTE_SUCCESS:
            return {
                ...state,
                isDeleteVoteSuccess: { status: action.status === 200 ? true : false }
            };
        case ADD_TO_FAVORITES_SUCCESS:
            return {
                ...state,
                isAddToFavoritesSuccess: { status: action.status === 200 ? true : false }
            };
        case DELETE_FROM_FAVORITES_SUCCESS:
            return {
                ...state,
                isDeleteFromFavoritesSuccess: { status: action.status === 200 ? true : false }
            };
        default:
            return state;
    }
};

//-----------------------------------------------------------------------------
// votes
//-----------------------------------------------------------------------------

export const setVotes = (response) => ({
    type: SET_VOTES,
    votes: response.data,
    status: response.status
});

export const getVotesThunk = () => {
    return (dispatch) => {
        votingAPI.getVotes()
        .then(response => dispatch(setVotes(response)));
    };
};

//---------------------------------------------------

export const createVoteSuccess = (status) => ({
    type: CREATE_VOTE_SUCCESS,
    status: status
});

export const createVoteThunk = (imageId, value) => {
    return (dispatch) => {
        votingAPI.createVote(imageId, value)
        .then(status => dispatch(createVoteSuccess(status)));
    };
};

//---------------------------------------------------

export const deleteVoteSuccess = (status) => ({
    type: DELETE_VOTE_SUCCESS,
    status: status
});

export const deleteVoteThunk = (imageId) => {
    return (dispatch) => {
        votingAPI.deleteVote(imageId)
        .then(status => dispatch(deleteVoteSuccess(status)));
    };
};

//-----------------------------------------------------------------------------
// favorites
//-----------------------------------------------------------------------------

export const setFavorites = (response) => ({
    type: SET_FAVORITES,
    favorites: response.data,
    status: response.status
});

export const getFavoritesThunk = () => {
    return (dispatch) => {
        votingAPI.getFavorites()
        .then(response => dispatch(setFavorites(response)));
    };
};

//---------------------------------------------------

export const addToFavoritesSuccess = (status) => ({
    type: ADD_TO_FAVORITES_SUCCESS,
    status: status
});

export const addToFavoritesThunk = (imageId) => {
    return (dispatch) => {
        votingAPI.addToFavorites(imageId)
        .then(status => {
            console.log(status);
            dispatch(addToFavoritesSuccess(status));
        });
    };
};

//---------------------------------------------------

export const deleteFromFavoritesSuccess = (status) => ({
    type: DELETE_FROM_FAVORITES_SUCCESS,
    status: status
});

export const deleteFromFavoritesThunk = (favoriteId) => {
    return (dispatch) => {
        votingAPI.deleteFromFavorites(favoriteId)
        .then(status => dispatch(deleteFromFavoritesSuccess(status)));
    };
};

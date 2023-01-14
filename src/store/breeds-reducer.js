import { breedsAPI } from "../api/api";

const SET_BREEDS = 'SET_BREEDS';
const CHANGE_BREEDS_LIMIT = 'CHANGE_BREEDS_LIMIT';
const SET_BREEDS_LIMIT_FILTERED = 'SET_BREEDS_LIMIT_FILTERED';
const CHANGE_BREEDS_ORDER = 'CHANGE_BREEDS_ORDER';
const SET_BREEDS_ORDER_FILTERED = 'SET_BREEDS_ORDER_FILTERED';
const SET_SINGLE_BREED = 'SET_SINGLE_BREED';

const initialState = {
    breeds: [],
    breedsToRender: [],
    breedsLimit: 5,
    breedsOrderAsc: true
};

export const breedsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BREEDS:
            return {
                ...state,
                breeds: action.breeds,
                breedsToRender: action.breeds.slice(0, state.breedsLimit)
            };
        case CHANGE_BREEDS_LIMIT:
            return {
                ...state,
                breedsLimit: action.limit
            };
        case SET_BREEDS_LIMIT_FILTERED:
            return {
                ...state,
                breedsToRender: [...action.breeds]
            };
        case CHANGE_BREEDS_ORDER:
            return {
                ...state,
                breedsOrderAsc: action.order
            };
        case SET_BREEDS_ORDER_FILTERED:
            return {
                ...state,
                breedsToRender: [...action.breeds]
            };
        case SET_SINGLE_BREED:
            return {
                ...state,
                breedsToRender: [...action.breed]
            };
        default:
            return state;
    };
};

//-----------------------------------------------------------------------------
// get and set breeds
//-----------------------------------------------------------------------------

export const getBreeds = () => {
    return (dispatch) => {
        breedsAPI.getBreeds()
        .then(data => dispatch(setBreeds(data)));
    };
};

export const setBreeds = (breeds) => ({
    type: SET_BREEDS,
    breeds: breeds
});

//-----------------------------------------------------------------------------
// breeds limit
//-----------------------------------------------------------------------------

export const changeBreedsLimit = (limit) => ({
    type: CHANGE_BREEDS_LIMIT,
    limit: limit
});

export const setBreedsLimitFiltered = (breeds) => ({
    type: SET_BREEDS_LIMIT_FILTERED,
    breeds: breeds
});

//-----------------------------------------------------------------------------
// breeds order
//-----------------------------------------------------------------------------

export const changeBreedsOrder = (order) => ({
    type: CHANGE_BREEDS_ORDER,
    order: order
});

export const setBreedsOrderFiltered = (breeds) => ({
    type: SET_BREEDS_ORDER_FILTERED,
    breeds: breeds
});

//-----------------------------------------------------------------------------
// single breed
//-----------------------------------------------------------------------------

export const setSingleBreed = (breed) => ({
    type: SET_SINGLE_BREED,
    breed: breed
});

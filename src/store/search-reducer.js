const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';
const CHANGE_SEARCH_INPUT_FOCUS = 'CHANGE_SEARCH_INPUT_FOCUS';
const CHANGE_SEARCH_FOR = 'CHANGE_SEARCH_FOR';
const SET_FOUND_BREEDS = 'SET_FOUND_BREEDS';
const SET_FOUND_BREEDS_TO_RENDER = 'SET_FOUND_BREEDS_TO_RENDER';

const initialState = {
    searchInput: '',
    searchInputFocus: false,
    searchFor: '',
    foundBreeds: [],
    foundBreedsToRender: []
};

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.value
            };
        case CHANGE_SEARCH_INPUT_FOCUS:
            return {
                ...state,
                searchInputFocus: action.focus
            };
        case CHANGE_SEARCH_FOR:
            return {
                ...state,
                searchFor: action.searchFor
            };
            case SET_FOUND_BREEDS:
                return {
                    ...state,
                    foundBreeds: action.foundBreeds
                };
            case SET_FOUND_BREEDS_TO_RENDER:
                return {
                    ...state,
                    foundBreedsToRender: action.foundBreedsToRender
                };
        default:
            return state;
    };
};

//-----------------------------------------------------------------------------
// find breeds
//-----------------------------------------------------------------------------

export const changeInput = (value) => ({
    type: CHANGE_SEARCH_INPUT,
    value: value
});

export const changeInputFocus = (focus) => ({
    type: CHANGE_SEARCH_INPUT_FOCUS,
    focus: focus
});

export const changeSearchFor = (searchFor) => ({
    type: CHANGE_SEARCH_FOR,
    searchFor: searchFor
});

export const setFoundBreeds = (foundBreeds) => ({
    type: SET_FOUND_BREEDS,
    foundBreeds: foundBreeds
});

export const setFoundBreedsToRender = (foundBreedsToRender) => ({
    type: SET_FOUND_BREEDS_TO_RENDER,
    foundBreedsToRender: foundBreedsToRender
});

// export const getBreeds = () => {
//     return (dispatch) => {
//         breedsAPI.getBreeds()
//         .then(data => dispatch(setBreeds(data)));
//     };
// };

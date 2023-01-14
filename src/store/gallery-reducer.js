import { imagesAPI } from "../api/api";

const SET_GALLERY_IMAGES = 'SET_GALLERY_IMAGES';
const SET_GALLERY_ORDER = 'SET_GALLERY_ORDER';
const SET_GALLERY_TYPE = 'SET_GALLERY_TYPE';
const SET_GALLERY_BREED_ID = 'SET_GALLERY_BREED_ID';
const SET_GALLERY_LIMIT = 'SET_GALLERY_LIMIT';

const initialState = {
    galleryImages: [],
    galleryOrder: 'RANDOM',
    galleryType: '',
    galleryBreedId: '',
    galleryLimit: 5
};

export const galleryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GALLERY_IMAGES:
            return {
                ...state,
                galleryImages: action.images
            };
        case SET_GALLERY_ORDER:
            return {
                ...state,
                galleryOrder: action.galleryOrder
            };
        case SET_GALLERY_TYPE:
            return {
                ...state,
                galleryType: action.galleryType
            };
        case SET_GALLERY_BREED_ID:
            return {
                ...state,
                galleryBreedId: action.galleryBreedId
            };
        case SET_GALLERY_LIMIT:
            return {
                ...state,
                galleryLimit: action.galleryLimit
            };
        default:
            return state;
    };
};

//-----------------------------------------------------------------------------
// gallery images
//-----------------------------------------------------------------------------

export const setGalleryImages = (images) => ({
    type: SET_GALLERY_IMAGES,
    images: images
});

export const getGalleryImages = (
    galleryOrder = initialState.galleryOrder,
    galleryType = initialState.galleryType,
    galleryBreed = initialState.galleryBreedId,
    galleryLimit = initialState.galleryLimit) => {
    return (dispatch) => {
        imagesAPI.getGalleryImages(galleryOrder, galleryType, galleryBreed, galleryLimit)
        .then(data => dispatch(setGalleryImages(data)));
    };
};

//-----------------------------------------------------------------------------
// gallery search parameters
//-----------------------------------------------------------------------------

export const setGalleryOrder = (galleryOrder) => ({
    type: SET_GALLERY_ORDER,
    galleryOrder: galleryOrder
});

export const setGalleryType = (galleryType) => ({
    type: SET_GALLERY_TYPE,
    galleryType: galleryType
});

export const setGalleryBreedId = (galleryBreedId) => ({
    type: SET_GALLERY_BREED_ID,
    galleryBreedId: galleryBreedId
});

export const setGalleryLimit = (galleryLimit) => ({
    type: SET_GALLERY_LIMIT,
    galleryLimit: galleryLimit
});

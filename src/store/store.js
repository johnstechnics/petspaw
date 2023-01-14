import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { breedsReducer } from './breeds-reducer';
import { imagesReducer } from './images-reducer';
import { votingReducer } from './voting-reducer';
import { galleryReducer } from './gallery-reducer';
import { searchReducer } from './search-reducer';

const reducers = combineReducers({
    breedsPage: breedsReducer,
    votingPage: votingReducer,
    imagesPage: imagesReducer,
    galleryPage: galleryReducer,
    search: searchReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

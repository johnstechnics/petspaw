import { connect } from "react-redux";
import { deleteFromFavoritesThunk, getFavoritesThunk } from '../../store/voting-reducer';
import { FavoritesGetData } from './FavoritesGetData';

const mapStateToProps = (state) => {
    return {
        favorites: state.votingPage.favorites,
        isGetFavoritesSuccess: state.votingPage.isGetFavoritesSuccess,
        isDeleteFromFavoritesSuccess: state.votingPage.isDeleteFromFavoritesSuccess
    }
};

export const FavoritesContainer = connect(mapStateToProps, { deleteFromFavoritesThunk, getFavoritesThunk })(FavoritesGetData);

import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeImg } from '../assets/img/like.svg';
import { ReactComponent as FavouriteImg } from '../assets/img/favourite.svg';
import { ReactComponent as DislikeImg } from '../assets/img/dislike.svg';
import { ReactComponent as BurgerImg } from '../assets/img/burger.svg';
import { SearchBarContainer } from './SearchBarContainer';

export const NavBar = (props) => {
    return (
        <div className="navbar__wrap">
            <div className="navbar">
                <button
                    className="mobilemenu__btn navbar__btn"
                    onClick={() => props.setMobilemenuActive(true)}
                >
                    <BurgerImg />
                </button>
                <SearchBarContainer />
                <NavLink className="likes__btn navbar__btn" to="/likes">
                    <LikeImg />
                </NavLink>
                <NavLink className="favourites__btn navbar__btn" to="/favorites">
                    <FavouriteImg />
                </NavLink>
                <NavLink className="dislikes__btn navbar__btn" to="/dislikes">
                    <DislikeImg />
                </NavLink>
            </div>
        </div>
    )
};

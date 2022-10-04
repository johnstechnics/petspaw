import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeImg } from '../assets/img/like.svg';
import { ReactComponent as FavouriteImg } from '../assets/img/favourite.svg';
import { ReactComponent as DislikeImg } from '../assets/img/dislike.svg';
import { ReactComponent as BurgerImg } from '../assets/img/burger.svg';
import { SearchBar } from './SearchBar';

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
                <SearchBar 
					searchInput={props.searchInput} 
					setSearchInput={props.setSearchInput} 
                    searchResult={props.searchResult} 
                    handlerSearchKeyPress={props.handlerSearchKeyPress} 
                    handlerSearchResult={props.handlerSearchResult} 
                 />
                <NavLink className="likes__btn navbar__btn" to="/likes">
                    <LikeImg />
                </NavLink>
                <NavLink className="favourites__btn navbar__btn" to="/favourites">
                    <FavouriteImg />
                </NavLink>
                <NavLink className="dislikes__btn navbar__btn" to="/dislikes">
                    <DislikeImg />
                </NavLink>
            </div>
        </div>
    )
};

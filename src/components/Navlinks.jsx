import { NavLink } from 'react-router-dom';
import VotingImg from '../assets/img/voting.png';
import BreedsImg from '../assets/img/breeds.png';
import GalleryImg from '../assets/img/gallery.png';

export const Navlinks = (props) => {
	return (
        <div className="navlinks">
            <NavLink 
                onClick={() => {
                    props.mobilemenuActive && props.setMobilemenuActive(false);
                }} 
                className="navlink__voting navlink" 
                to="/voting"
            >
                <div className="navlink__border">
                    <img src={VotingImg} alt="voting_img" />
                </div>
                <p className="navlink__title">voting</p>
            </NavLink>
            <NavLink 
                onClick={() => {
                    props.mobilemenuActive && props.setMobilemenuActive(false);
                }} 
                className="navlink__breeds navlink" 
                to="/breeds"
            >
                <div className="navlink__border">
                    <img src={BreedsImg} alt="breeds_img" />
                </div>
                <p className="navlink__title">breeds</p>
            </NavLink>
            <NavLink 
                onClick={() => {
                    props.mobilemenuActive && props.setMobilemenuActive(false);
                }} 
                className="navlink__gallery navlink" 
                to="/gallery"
            >
                <div className="navlink__border">
                    <img src={GalleryImg} alt="gallery_img" />
                </div>
                <p className="navlink__title">gallery</p>
            </NavLink>
        </div>
	)
};

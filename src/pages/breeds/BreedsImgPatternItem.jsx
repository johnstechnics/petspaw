import { NavLink } from 'react-router-dom';
import { ImageItem } from '../../components/ImageItem';

export const BreedsImgPatternItem = (props) => {
	return (	
        <div className="img__pattern_item">
            <ImageItem 
                src={props.breed.image.url} 
                alt={props.breed.name} 
            />
            <div className="img__pattern_overlay">
                {<NavLink 
                    onClick={() => props.handlerCurrentBreed(props.breed)} 
                    className="breeds__breed_link" to="/breed"
                >
                    {props.breed.name}
                </NavLink>}
            </div>
        </div>
	)
};

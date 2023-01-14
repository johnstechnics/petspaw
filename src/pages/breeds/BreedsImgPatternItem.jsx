import { NavLink } from 'react-router-dom';
import { ImageItem } from '../../components/ImageItem';

export const BreedsImgPatternItem = (props) => {
    return (
        <div className="img__pattern_item">
            <ImageItem
                src={props.breed.image.url}
                alt={props.breed.name}
            />
            <div
                className="img__pattern_overlay"
                onClick={() => props.handlerSingleBreedRedirect(props.breed.id)}
            >
                <div className="breeds__breed_link">
                    {props.breed.name}
                </div>
            </div>
        </div>
    )
};

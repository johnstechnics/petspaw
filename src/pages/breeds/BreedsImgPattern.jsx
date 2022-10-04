import { useLocation } from 'react-router-dom';
import { BreedsImgPatternItem } from './BreedsImgPatternItem';

export const BreedsImgPattern = (props) => {

    const currentPage = useLocation().pathname.slice(1);

	return (
		<div className={`img__pattern ${currentPage}`}>
            {props.someOneBreed ? (
                <BreedsImgPatternItem 
                    handlerCurrentBreed={props.handlerCurrentBreed} 
                    breed={props.someOneBreed} 
                />
            ) : (
                props.breedsRendered.map(breed => (
                    <BreedsImgPatternItem 
                        handlerCurrentBreed={props.handlerCurrentBreed} 
                        breed={breed} 
                        key={breed.id} 
                    />
                ))
            )}
        </div>
	)
};

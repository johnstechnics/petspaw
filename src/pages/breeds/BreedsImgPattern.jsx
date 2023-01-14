import { BreedsImgPatternItem } from './BreedsImgPatternItem';

export const BreedsImgPattern = (props) => {

    return (
        <div className="img__pattern breeds">
            {props.breedsToRender.map(breed => (
                <BreedsImgPatternItem
                    breed={breed}
                    key={breed.id}
                    handlerSingleBreedRedirect={props.handlerSingleBreedRedirect}
                />
            ))}
        </div>
    )
};

import Slider from 'react-slick';
import { ImageItem } from '../../components/ImageItem';

export const BreedSlider = (props) => {
    return (
        <div className="breed__img">
            <Slider {...props.sliderSettings}>
                {props.sliderImages.map(img => (
                    <div
                        className="breed__slide"
                        key={img.id}
                    >
                        <ImageItem
                            src={img.url}
                            alt={img.id}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSliderImages } from '../../store/images-reducer';
import { breedsSelector } from '../../store/selectors';
import { BreedPage } from './BreedPage';

export const BreedContainer = () => {

	const dispatch = useDispatch();
	const breedId = +useParams().id;
	const breeds = useSelector(breedsSelector);
	const sliderImages = useSelector(state => state.imagesPage.sliderImages);
	const breed = breeds.find((breed) => breed.id === breedId);

	const sliderSettings = {
		dots: true,
		customPaging: () => <i></i>,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		className: 'breed__slider'
	};

	useEffect(() => {
		dispatch(getSliderImages(breedId));
	}, []);

	return (
		<BreedPage
			breed={breed}
			breedId={breedId}
			sliderImages={sliderImages}
			sliderSettings={sliderSettings}
		/>
	)
};

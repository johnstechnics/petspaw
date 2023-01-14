import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BreedSlider } from './BreedSlider';
import { BreedInfo } from './BreedInfo';

export const BreedPage = (props) => {
	return (
		<div className="breed page">
			<div className="page__content">
				<div className="page__options">
					<Breadcrumbs />
					<div className="breed__id">
						{props.breedId}
					</div>
				</div>
				<div className="breed__card">
					<BreedSlider
						sliderImages={props.sliderImages}
						sliderSettings={props.sliderSettings}
					/>
					<BreedInfo breed={props.breed} />
				</div>
			</div>
		</div>
	)
};

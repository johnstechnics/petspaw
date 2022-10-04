import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BreedSlider } from './BreedSlider';
import { BreedInfo } from './BreedInfo';

export const Breed = (props) => {
	return (
		<div className="breed page">
			<div className="page__content">
				<div className="page__options">
					<Breadcrumbs />
                    <div className="breed__id">
                        {props.currentBreed.id}
                    </div>
				</div>
				<div className="breed__card">
                    <BreedSlider currentBreed={props.currentBreed} />
                    <BreedInfo currentBreed={props.currentBreed} />
				</div>
			</div>
		</div>
	)
};

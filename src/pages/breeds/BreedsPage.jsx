import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BreedsForm } from './BreedsForm';
import { Loader } from '../../components/Loader';
import { BreedsImgPattern } from './BreedsImgPattern';

export const BreedsPage = (props) => {
	return (
		<div className="breeds page">
			<div className="page__content">
				<div className="page__options">
					<Breadcrumbs currentPage={'breeds'} />
					<BreedsForm
						breedsSingleSelectData={props.breedsSingleSelectData}
						breedsLimitSelectData={props.breedsLimitSelectData}
						breeds={props.breeds}
						breedsOrderAsc={props.breedsOrderAsc}
						handlerBreedsLimit={props.handlerBreedsLimit}
						handlerBreedsOrder={props.handlerBreedsOrder}
						handlerSingleBreedId={props.handlerSingleBreedId}
					/>
				</div>
				{props.breedsToRender.length === 0 ? (
					<Loader />
				) : (
					<BreedsImgPattern
						breedsToRender={props.breedsToRender}
						handlerSingleBreedRedirect={props.handlerSingleBreedRedirect}
					/>
				)
				}
			</div>
		</div>
	)
};

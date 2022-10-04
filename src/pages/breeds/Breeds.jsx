import { useState, useEffect } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BreedsForm } from './BreedsForm';
import { Loader } from '../../components/Loader';
import { BreedsImgPattern } from './BreedsImgPattern';

export const Breeds = (props) => {

	const [breedsRendered, setBreedsRendered] = useState([]);

    const [breedsLimit, setBreedsLimit] = useState(5);

    const [breedsRenderedSort, setSreedsRenderedSort] = useState(true);

    const [someOneBreedId, setSomeOneBreedId] = useState('');
    const [someOneBreed, setSomeOneBreed] = useState('');

	const getBreedsRender = () => {
		const breedsRendered = props.breeds.slice(0, breedsLimit);
		setBreedsRendered(breedsRendered);
	};

	const handlerBreedsLimit = (i) => {
        setBreedsLimit(i);
		setSreedsRenderedSort(true);
    };

	const handlerBreedsSort = (event) => {
		if(event.target.value !== 'active') {
            setSreedsRenderedSort(!breedsRenderedSort);
			setBreedsRendered(breedsRendered.reverse());
        }
	};

	const getSomeOneBreed = () => {
		setSomeOneBreed(props.breeds.find(breed => breed.id === +someOneBreedId));
	};

	useEffect(() => {
		getBreedsRender();
	}, [props.breeds, breedsLimit]);

	useEffect(() => {
		getSomeOneBreed();
	}, [someOneBreedId]);

	return (
		<div className="breeds page">
			<div className="page__content">
				<div className="page__options">
					<Breadcrumbs />
					<BreedsForm 
						breeds={props.breeds} 
						handlerBreedsLimit={handlerBreedsLimit} 
						breedsLimit={breedsLimit} 
						handlerBreedsSort={handlerBreedsSort} 
						breedsRenderedSort={breedsRenderedSort} 
						setSomeOneBreedId={setSomeOneBreedId} 
						setBreedsLimit={setBreedsLimit} 
					/>
				</div>
				{props.breeds.length === 0 ? (
						<Loader />
					) : (
						<BreedsImgPattern 
							breedsRendered={breedsRendered} 
							someOneBreed={someOneBreed} 
							handlerCurrentBreed={props.handlerCurrentBreed} 
						/>
					)
				}
			</div>
		</div>
	)
};

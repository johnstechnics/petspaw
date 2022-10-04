import { useState, useEffect } from 'react';
import { ReactComponent as UploadImg } from '../../assets/img/upload.svg';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GalleryForm } from './GalleryForm';
import { GalleryImgPattern } from './GalleryImgPattern';
import { Loader } from '../../components/Loader';

export const Gallery = (props) => {

	const [galleryImgs, setGalleryImgs] = useState([]);

	const [galleryOrder, setGalleryOrder] = useState('RANDOM');
	const [galleryType, setGalleryType] = useState('');
	const [galleryBreed, setGalleryBreed] = useState('');
	const [galleryLimit, setGalleryLimit] = useState(5);

	const apiUrl = process.env.REACT_APP_API_URL;

	const getGalleryImgs = () => {
		const galleryImgsUrl = apiUrl + `images/search?order=
			${galleryOrder}&mime_types=
			${galleryType}&breed_id=
			${galleryBreed}&limit=
			${galleryLimit}`;
		fetch(galleryImgsUrl, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            	}
        	}	
		)
		.then(response => response.json())
		.then(data => setGalleryImgs(data))
		.catch(error => console.log(error))
	};

	const handlerGalleryUpdate = () => {
		getGalleryImgs();
	};

	useEffect(() => {
		getGalleryImgs();
	}, []);

	return (
		<div className="gallery page">
			<div className="page__content">
				<div className="page__options">
					<div className="page__options_top">
						<Breadcrumbs />
						<button 
							className="upload__open" 
							onClick={() => {
								props.setModalActive(true);
							}}
						>
							<UploadImg />
							UPLOAD
						</button>
					</div>
                    <GalleryForm 
						breeds={props.breeds} 
						setGalleryOrder={setGalleryOrder} 
						setGalleryType={setGalleryType} 
						setGalleryBreed={setGalleryBreed} 
						setGalleryLimit={setGalleryLimit} 
						handlerGalleryUpdate={handlerGalleryUpdate} 
					/>
				</div>
				{galleryImgs.length === 0 ? (
                    <Loader />
                ) : (
					<GalleryImgPattern 
						galleryImgs={galleryImgs} 
						favourites={props.favourites} 
						setAddToFavouritesResponse={props.setAddToFavouritesResponse} 
						setIsDeleteFromFavourites={props.setIsDeleteFromFavourites} 
					/>
                )}
			</div>
		</div>
	)
};

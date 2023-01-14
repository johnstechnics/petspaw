import { ReactComponent as UploadImg } from '../../assets/img/upload.svg';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GalleryFormContainer } from './galleryForm/GalleryFormContainer';
import { GalleryImgPattern } from './GalleryImgPattern';
import { Loader } from '../../components/Loader';

export const GalleryPage = (props) => {
	return (
		<div className="gallery page">
			<div className="page__content">
				<div className="page__options">
					<div className="page__options_top">
						<Breadcrumbs currentPage={'gallery'} />
						<button
							className="upload__open"
							onClick={() => {
								// props.setModalActive(true);
							}}
						>
							<UploadImg />
							UPLOAD
						</button>
					</div>
					<GalleryFormContainer />
				</div>
				{props.galleryImages.length === 0 ? (
					<Loader />
				) : (
					<GalleryImgPattern
						galleryImages={props.galleryImages}
					// favourites={props.favourites}
					// setAddToFavouritesResponse={props.setAddToFavouritesResponse}
					// setIsDeleteFromFavourites={props.setIsDeleteFromFavourites}
					/>
				)}
			</div>
		</div>
	)
};

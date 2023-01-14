import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryImages, setGalleryImages } from '../../store/gallery-reducer';
import { GalleryPage } from './GalleryPage';

export const GalleryContainer = React.memo(() => {

	const dispatch = useDispatch();
	const galleryImages = useSelector(state => state.galleryPage.galleryImages);

	useEffect(() => {
		dispatch(getGalleryImages());
		return () => dispatch(setGalleryImages([]));
	}, []);

	return (
		<GalleryPage galleryImages={galleryImages} />
	)
});

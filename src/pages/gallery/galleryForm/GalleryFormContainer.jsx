import { useDispatch, useSelector } from 'react-redux';
import { getGalleryImages, setGalleryBreedId, setGalleryLimit, setGalleryOrder, setGalleryType } from '../../../store/gallery-reducer';
import { breedsSelector } from '../../../store/selectors';
import { GalleryForm } from './GalleryForm';

export const GalleryFormContainer = () => {

    const dispatch = useDispatch();

    const galleryOrder = useSelector(state => state.galleryPage.galleryOrder);
    const galleryType = useSelector(state => state.galleryPage.galleryType);
    const galleryBreedId = useSelector(state => state.galleryPage.galleryBreedId);
    const galleryLimit = useSelector(state => state.galleryPage.galleryLimit);

    const breeds = useSelector(breedsSelector);

    const gallerySelectData = {
        orderSelectData: [
            { value: 'RANDOM', text: 'Random' },
            { value: 'DESC', text: 'Desc' },
            { value: 'ASC', text: 'Asc' }
        ],
        typeSelectData: [
            { value: '', text: 'All' },
            { value: 'jpg,png', text: 'Static' },
            { value: 'gif', text: 'Animated' }
        ],
        breedsSelectData: [
            { value: '', text: 'All breeds' },
            ...breeds.map(breed => ({ value: breed.id, text: breed.name }))
        ],
        limitSelectData: [
            { value: 5, text: 'Limit: 5' },
            { value: 10, text: 'Limit: 10' },
            { value: 15, text: 'Limit: 15' },
            { value: 20, text: 'Limit: 20' }
        ]
    };

    const handlerOrder = (order) => {
        dispatch(setGalleryOrder(order));
    };

    const handlerType = (type) => {
        dispatch(setGalleryType(type));
    };

    const handlerBreed = (breed) => {
        dispatch(setGalleryBreedId(breed));
    };

    const handlerLimit = (limit) => {
        dispatch(setGalleryLimit(limit));
        console.log('handlerLimit');
    };

    const getImages = () => {
        dispatch(getGalleryImages(galleryOrder, galleryType, galleryBreedId, galleryLimit));
    };

    return (
        <GalleryForm
            gallerySelectData={gallerySelectData}
            handlerOrder={handlerOrder}
            handlerType={handlerType}
            handlerBreed={handlerBreed}
            handlerLimit={handlerLimit}
            handlerUpdate={getImages}
            galleryLimit={galleryLimit}
        />
    )
};

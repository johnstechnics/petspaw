import { useRef, useEffect } from 'react';
import { ReactComponent as UpdateImg } from '../../assets/img/update.svg';
import { CustomSelect } from '../../components/CustomSelect';

export const GalleryForm = (props) => {

    const orderSelectData = [
        {value: 'RANDOM', text: 'Random'},
        {value: 'DESC', text: 'Desc'},
        {value: 'ASC', text: 'Asc'}
    ];

    const typeSelectData = [
        {value: '', text: 'All'},
        {value: 'jpg,png', text: 'Static'},
        {value: 'gif', text: 'Animated'}
    ];

    const breedsSelectData = useRef([{value: '', text: 'All breeds'}]);

    const limitSelectData = [
        {value: 5, text: 'Limit: 5'},
        {value: 10, text: 'Limit: 10'},
        {value: 15, text: 'Limit: 15'},
        {value: 20, text: 'Limit: 20'}
    ];

    useEffect(() => {
        props.breeds.forEach(({id, name}) => {
            breedsSelectData.current.push({value: id, text: name});
        });
    }, [props.breeds]);

	return (
        <form className="gallery__form" action="">

            <div className="gallery__form_order">
                <span className="gallery__form_label">
                    order
                </span>
                <CustomSelect 
                    data={orderSelectData} 
                    onChange={props.setGalleryOrder} 
                />
            </div>

            <div className="gallery__form_type">
                <span className="gallery__form_label">
                    type
                </span>
                <CustomSelect 
                    data={typeSelectData} 
                    onChange={props.setGalleryType} 
                />
            </div>

            <div className="gallery__form_breed">
                <span className="gallery__form_label">
                    breed
                </span>
                <CustomSelect 
                    data={breedsSelectData.current} 
                    onChange={props.setGalleryBreed} 
                />
            </div>

            <div className="gallery__form_limit">
                <span className="gallery__form_label">
                    limit
                </span>
                <CustomSelect 
                    data={limitSelectData} 
                    onChange={props.setGalleryLimit} 
                />
            </div>

            <button 
				type="button" 
                onClick={props.handlerGalleryUpdate} 
                className="gallery__update"
            >
                <UpdateImg />
            </button>
        </form>
	)
};

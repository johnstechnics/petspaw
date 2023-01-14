import { ReactComponent as UpdateImg } from '../../../assets/img/update.svg';
import { CustomSelect } from '../../../components/CustomSelect';

export const GalleryForm = (props) => {
    return (
        <form className="gallery__form" action="">

            <div className="gallery__form_order">
                <span className="gallery__form_label">
                    order
                </span>
                <CustomSelect
                    data={props.gallerySelectData.orderSelectData}
                    onChange={props.handlerOrder}
                />
            </div>

            <div className="gallery__form_type">
                <span className="gallery__form_label">
                    type
                </span>
                <CustomSelect
                    data={props.gallerySelectData.typeSelectData}
                    onChange={props.handlerType}
                />
            </div>

            <div className="gallery__form_breed">
                <span className="gallery__form_label">
                    breed
                </span>
                <CustomSelect
                    data={props.gallerySelectData.breedsSelectData}
                    onChange={props.handlerBreed}
                />
            </div>

            <div className="gallery__form_limit">
                <span className="gallery__form_label">
                    limit
                </span>
                <CustomSelect
                    data={props.gallerySelectData.limitSelectData}
                    defaultValue={props.galleryLimit}
                    onChange={props.handlerLimit}
                />
            </div>

            <button
                type="button"
                onClick={props.handlerUpdate}
                className="gallery__update"
            >
                <UpdateImg />
            </button>
        </form>
    )
};

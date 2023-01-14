import { CloseBtn } from "../../components/CloseBtn";
import { Dropzone } from '../../components/Dropzone';

export const Upload = (props) => {
    return (
        <div 
            className="upload__wrap" 
            onClick={event => {event.stopPropagation()}}
        >
            <CloseBtn setFalse={props.setModalActive} />
            <div className="upload">
                <p className="upload__title">
                    Upload a .jpg or .png Dog Image
                </p>
                <p className="upload__guidelines">
                    Any uploads must comply with the<span> </span>
                    <a href="https://www.thedogapi.com/privacy" target="_blank">
                        upload guidelines<span> </span>
                    </a>
                    or face deletion.
                </p>
                <Dropzone />
            </div>
        </div>
    )
};

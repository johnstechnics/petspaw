import { ReactComponent as CloseImg } from '../assets/img/close.svg';

export const CloseBtn = (props) => (
    <button 
        className="close__btn" 
        onClick={() => {props.setFalse(false)}}
    >
        <CloseImg />
    </button>
);

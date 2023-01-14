import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackImg } from '../assets/img/back.svg';

export const Breadcrumbs = (props) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="breadcrumbs">
            <button
                title="Back"
                onClick={goBack}
                className="back__btn"
            >
                <BackImg />
            </button>
            <div className="current__page">
                {props.currentPage}
            </div>
        </div>
    )
};

import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackImg } from '../assets/img/back.svg';

export const GoBack = () => {

	const navigate = useNavigate();
	
	return (
		<button 
			title="Back" 
			onClick={() => navigate(-1)} 
			className="back__btn"
		>
			<BackImg />
		</button>
	)
};

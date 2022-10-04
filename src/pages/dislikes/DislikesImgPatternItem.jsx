import { useState, useEffect } from 'react';
import { ReactComponent as CloseImg } from '../../assets/img/close.svg';
import { ImageItem } from '../../components/ImageItem';

export const DislikesImgPatternItem = (props) => {
    
    const [dislikedImg, setDislikedImg] = useState([]);

	const apiUrl = process.env.REACT_APP_API_URL;
	const xApiKey = process.env.REACT_APP_X_API_KEY;

	const getDislikedImg = () => {
		const dislikedImgUrl = apiUrl + `images/${props.dislike.image_id}`;
		fetch(dislikedImgUrl, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'x-api-key': xApiKey
            	}
        	}	
		)
		.then(response => response.json())
		.then(data => setDislikedImg(data))
		.catch(error => console.log(error))
	};

    useEffect(() => {
        getDislikedImg();
    }, []);

	return (
        <div className="img__pattern_item">
            <ImageItem 
                src={dislikedImg.url} 
                alt={dislikedImg.id} 
            />
            <div className="img__pattern_overlay">
                <button 
                    type="button" 
                    title="Remove from dislikes" 
                    className="favourites__favourites_btn"
                    onClick={() => props.deleteDislike(props.dislike.id)}
                >
                    <CloseImg />
                </button>
            </div>
        </div>
	)
};

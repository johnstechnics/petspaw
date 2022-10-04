import { useState, useEffect } from 'react';
import { ReactComponent as CloseImg } from '../../assets/img/close.svg';
import { ImageItem } from '../../components/ImageItem';

export const LikesImgPatternItem = (props) => {
    
    const [likedImg, setLikedImg] = useState([]);

	const apiUrl = process.env.REACT_APP_API_URL;
	const xApiKey = process.env.REACT_APP_X_API_KEY;

	const getLikedImg = () => {
		const likedImgUrl = apiUrl + `images/${props.like.image_id}`;
		fetch(likedImgUrl, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'x-api-key': xApiKey
            	}
        	}	
		)
		.then(response => response.json())
		.then(data => setLikedImg(data))
		.catch(error => console.log(error))
	};

    useEffect(() => {
        getLikedImg();
    }, []);

	return (
        <div className="img__pattern_item">
            <ImageItem 
                src={likedImg.url} 
                alt={likedImg.id} 
            />
            <div className="img__pattern_overlay">
                <button 
                    type="button" 
                    title="Remove from likes" 
                    className="favourites__favourites_btn" 
                    onClick={() => props.deleteLike(props.like.id)}
                >
                    <CloseImg />
                </button>
            </div>
        </div>
	)
};

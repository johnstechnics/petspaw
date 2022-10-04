import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { ImageItem } from '../../components/ImageItem';

export const BreedSlider = (props) => {

	const [breedImgs, setBreedImgs] = useState([]);

	const apiUrl = process.env.REACT_APP_API_URL;

    const getBreedImgs = () => {
        const votingImgUrl = apiUrl + `images/search?breed_id=${props.currentBreed.id}&limit=5`;
        fetch(votingImgUrl, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            	}
        	}	
		)
		.then(response => response.json())
		.then(data => setBreedImgs(data))
		.catch(error => console.log(error))
    };

    const slidesrSettings = {
        dots: true,
        customPaging: () => <i></i>,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'breed__slider'
    };

    useEffect(() => {
        getBreedImgs();
    }, [props.currentBreed]);

	return (
        <div className="breed__img">
            <Slider {...slidesrSettings}>
                {breedImgs.map(img => (
                    <div 
                        className="breed__slide" 
                        key={img.id}
                    >
                        <ImageItem 
                            src={img.url} 
                            alt={img.id} 
                        />
                    </div>
                ))}
            </Slider>
        </div>
	)
};

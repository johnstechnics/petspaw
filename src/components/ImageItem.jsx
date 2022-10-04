import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ImageItem = (props) => {

    const [isImgLoaded, setImgLoaded] = useState(false);
    const [isImgError, setIsImgError] = useState(false);

	return (
        <div className={isImgLoaded ? 'image__item' : 'image__item img__loading'}>
            <LazyLoadImage 
                alt={props.alt} 
                src={props.src} 
                onLoad={() => setImgLoaded(true)} 
                onError={() => setIsImgError(true)} 
            />
            {isImgError && <p className="img__pattern_error">Error</p>}
        </div>
	)
};

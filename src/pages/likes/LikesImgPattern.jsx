import { useLocation } from 'react-router-dom';
import { LikesImgPatternItem } from './LikesImgPatternItem';

export const LikesImgPattern = (props) => {

    const currentPage = useLocation().pathname.slice(1);

    return (
        <div className={`img__pattern ${currentPage}`}>
            {props.likes.map(like => (
                <LikesImgPatternItem
                    key={like.id}
                    like={like}
                    handlerDeleteVote={props.handlerDeleteVote}
                />
            ))}
        </div>
    )
};

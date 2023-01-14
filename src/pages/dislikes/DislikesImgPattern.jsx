import { useLocation } from 'react-router-dom';
import { DislikesImgPatternItem } from './DislikesImgPatternItem';

export const DislikesImgPattern = (props) => {

    const currentPage = useLocation().pathname.slice(1);

    return (
        <div className={`img__pattern ${currentPage}`}>
            {props.dislikes.map(dislike => (
                <DislikesImgPatternItem
                    key={dislike.id}
                    dislike={dislike}
                    handlerDeleteVote={props.handlerDeleteVote}
                />
            ))}
        </div>
    )
};

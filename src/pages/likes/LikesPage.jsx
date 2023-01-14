import { Breadcrumbs } from "../../components/Breadcrumbs";
import { LikesImgPattern } from './LikesImgPattern';
import { NoItems } from '../../components/NoItems';
import { Loader } from "../../components/Loader";

export const LikesPage = (props) => {
    return (
        <div className="likes page">
            <div className="page__content">
                <div className="page__options">
                    <Breadcrumbs />
                </div>
                {props.likes.length === 0 ? (
                    props.isGetVotesSuccess.status ? (
                        <NoItems />
                    ) : (
                        <Loader />
                    )
                ) : (
                    <LikesImgPattern
                        likes={props.likes}
                        handlerDeleteVote={props.handlerDeleteVote}
                    />
                )}
            </div>
        </div>
    );
};

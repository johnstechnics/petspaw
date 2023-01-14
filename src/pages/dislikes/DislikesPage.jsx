import { Breadcrumbs } from "../../components/Breadcrumbs";
import { DislikesImgPattern } from './DislikesImgPattern';
import { NoItems } from '../../components/NoItems';
import { Loader } from "../../components/Loader";

export const DislikesPage = (props) => {
    return (
        <div className="dislikes page">
            <div className="page__content">
                <div className="page__options">
                    <Breadcrumbs />
                </div>
                {props.dislikes.length === 0 ? (
                    props.isGetVotesSuccess.status ? (
                        <NoItems />
                    ) : (
                        <Loader />
                    )
                ) : (
                    <DislikesImgPattern
                        dislikes={props.dislikes}
                        handlerDeleteVote={props.handlerDeleteVote}
                    />
                )}
            </div>
        </div>
    );
};

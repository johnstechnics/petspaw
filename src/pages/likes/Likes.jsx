import { Breadcrumbs } from "../../components/Breadcrumbs";
import { LikesImgPattern } from './LikesImgPattern';
import { NoItems } from '../../components/NoItems';
import { Loader } from "../../components/Loader";

export const Likes = (props) => {

	const apiUrl = process.env.REACT_APP_API_URL;
	const xApiKey = process.env.REACT_APP_X_API_KEY;

    const deleteLike = (id) => {
        const likesUrl = apiUrl + `votes/${id}`;
		fetch(likesUrl, {
			method: 'DELETE',
			headers: {
				'x-api-key': xApiKey
				}
			}
		)
		.then(response => props.setIsDeleteVote(Object(response.status)))
		.catch(error => console.log(error))
	};

    return (
        <div className="likes page">
            <div className="page__content">
                <div className="page__options">
					<Breadcrumbs />
				</div>
                {props.likes.length === 0 ? (
                    props.votesFetchStatus ? (
                        <Loader />
                    ) : (
                        <NoItems />
                    )
                ) : (
                    <LikesImgPattern 
                        likes={props.likes} 
                        deleteLike={deleteLike} 
                    />
                )}
            </div>
        </div>
    )
};

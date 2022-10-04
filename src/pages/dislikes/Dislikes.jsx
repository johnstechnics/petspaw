import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DislikesImgPattern } from './DislikesImgPattern';
import { NoItems } from '../../components/NoItems';
import { Loader } from "../../components/Loader";

export const Dislikes = (props) => {

	const apiUrl = process.env.REACT_APP_API_URL;
	const xApiKey = process.env.REACT_APP_X_API_KEY;

    const deleteDislike = (id) => {
        const dislikesUrl = apiUrl + `votes/${id}`;
		fetch(dislikesUrl, {
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
        <div className="dislikes page">
            <div className="page__content">
                <div className="page__options">
					<Breadcrumbs />
				</div>
                {props.dislikes.length === 0 ? (
                    props.votesFetchStatus ? (
                        <Loader />
                    ) : (
                        <NoItems />
                    )
                ) : (
                    <DislikesImgPattern 
                        dislikes={props.dislikes} 
                        deleteDislike={deleteDislike} 
                    />
                )}
            </div>
        </div>
    )
};

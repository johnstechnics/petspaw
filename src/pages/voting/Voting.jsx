import { useEffect, useState } from 'react';
import { ActionLog } from '../../components/ActionLog';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { VotingCard } from './VotingCard';

export const Voting = (props) => {

	const [votingImg, setVotingImg] = useState([]);
	const [ImgHasVote, setImgHasVote] = useState([]);

	const apiUrl = process.env.REACT_APP_API_URL;
	const xApiKey = process.env.REACT_APP_X_API_KEY;
 
	const getVotingImg = () => {
		const votingImgUrl = apiUrl + 'images/search?size=med';
		fetch(votingImgUrl, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            	}
        	}	
		)
		.then(response => response.json())
		.then(data => setVotingImg(data[0]))
		.catch(error => console.log(error))
	};

	const isImgHasVote = () => {
		let result = [];
		let tag = [];
		result = props.allVotes.filter(img => img.image_id === votingImg.id);
		result.forEach(img => {
			if(img.value === 1) {
				tag.push('L');
			} else if(img.value === 0) {
				tag.push('D');
			} else {
				tag.push('F');
			};
		});
		setImgHasVote(tag);
	};

	const createVote = (voteValue) => {
		const votesUrl = apiUrl + 'votes';
		fetch(votesUrl, {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'content-type': 'application/json',
				'x-api-key': xApiKey
				},
				body : JSON.stringify({
					'image_id': votingImg.id,
					'value': voteValue
				})
			}
		)
		.then(response => props.setAddVoteResponse(Object(response.ok)))
		.then(getVotingImg())
		.catch(error => console.log(error))
	};

	const addToFavourites = () => {
		const favouritesUrl = apiUrl + 'favourites';
		fetch(favouritesUrl, {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'content-type': 'application/json',
				'x-api-key': xApiKey
				},
			body: JSON.stringify({
				"image_id": votingImg.id,
				"sub_id": "null"
				})
			}
		)
		.then(response => props.setAddToFavouritesResponse(Object(response.status)))
		.catch(error => console.log(error))
	};

	useEffect(() => {
		getVotingImg();
	}, []);

	useEffect(() => {
		isImgHasVote();
	}, [props.allVotes, votingImg]);
	
	return (
		<div className="voting page">
			<div className="page__content">
				<div className="page__options">
					<Breadcrumbs />
				</div>
				<VotingCard 
					votingImg={votingImg} 
					createVote={createVote} 
					addToFavourites={addToFavourites} 
					ImgHasVote={ImgHasVote} 
				/>
				<ActionLog 
					allVotes={props.allVotes} 
					votesFetchStatus={props.votesFetchStatus} 
					favouritesFetchStatus={props.favouritesFetchStatus} 
				/>
			</div>
		</div>
	)
};

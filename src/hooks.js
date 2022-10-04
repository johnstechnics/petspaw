import { useState, useEffect } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;
const xApiKey = process.env.REACT_APP_X_API_KEY;

export const useTheme = () => {
    const [theme, setTheme] = useState( localStorage.getItem('app_theme') || 'light' );
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    localStorage.setItem( 'app_theme', theme );
    return {theme, setTheme};
};

export const useGetVotes = (dependencies) => {
	const [votes, setVotes] = useState([]);
	const [votesFetchStatus, setVotesFetchStatus] = useState(false);
    useEffect(() => {
        setVotesFetchStatus(true);
        const votesUrl = apiUrl + 'votes';
        fetch(votesUrl, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'x-api-key': xApiKey
                }
            }
        )
        .then(response => response.json())
        .then(data => setVotes(data))
        .catch(error => console.log(error))
        .finally(() => {
            setVotesFetchStatus(false);
        })
    }, [...dependencies]);
    return {votes, votesFetchStatus};
};

export const useGetFavourites = (dependencies) => {
	const [favourites, setFavourites] = useState([]);
	const [favouritesFetchStatus, setFavouritesFetchStatus] = useState(false);
    useEffect(() => {
        setFavouritesFetchStatus(true);
		const favouritesUrl = apiUrl + 'favourites';
		fetch(favouritesUrl, {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'x-api-key': xApiKey
				}
			}
		)
		.then(response => response.json())
		.then(data => setFavourites(data))
		.catch(error => console.log(error))
		.finally(() => {
			setFavouritesFetchStatus(false);
		})
    }, [...dependencies]);
    return {favourites, favouritesFetchStatus};
};

export const useJoinVotes = (votesData, favouritesData, dependencies) => {
	const [allVotes, setAllVotes] = useState([]);
    useEffect(() => {
        if(votesData.length !== 0 || favouritesData.length !== 0) {
            let data = votesData.concat(favouritesData);
            data = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setAllVotes(data);
        } else {
            setAllVotes([]);
        };
    }, [...dependencies]);
    return {allVotes};
};

export const useGetBreeds = (dependencies) => {
    const [breeds, setBreeds] = useState([]);
	const [breedsOrder, setBreedsOrder] = useState('AZ');
    useEffect(() => {
        const breedsUrl = apiUrl + 'breeds';
        fetch(breedsUrl, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'x-api-key': xApiKey
                }
            }	
        )
        .then(response => response.json())
        .then(data => {
            setBreeds(data);
            if(data[0].id === 1) {
                setBreedsOrder('AZ');
            } else {
                setBreedsOrder('ZA');
            };
        })
        .catch(error => console.log(error));
    }, [...dependencies]);
    return {breeds, breedsOrder};
};

export const useBodyOverflow = (a, b) => {
    useEffect(() => {
        if(a || b) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        };
    }, [a, b]);
};

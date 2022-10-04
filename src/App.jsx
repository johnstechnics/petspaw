import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useGetVotes, 
	useGetFavourites, 
	useJoinVotes, 
	useGetBreeds, 
	useBodyOverflow 
} from './hooks';
import './assets/css/reset.css';
import './assets/css/main.css';
import { Home } from './pages/home/Home';
import { Voting } from './pages/voting/Voting';
import { Breeds } from './pages/breeds/Breeds';
import { Breed } from './pages/breed/Breed';
import { Gallery } from './pages/gallery/Gallery';
import { Likes } from './pages/likes/Likes';
import { Favourites } from './pages/favourites/Favourites';
import { Dislikes } from './pages/dislikes/Dislikes';
import { Search } from './pages/search/Search';
import { Notfound } from './pages/notfound/Notfound';
import { Modal } from './components/Modal';
import { Navigation } from './components/Navigation';
import { NavBar } from './components/NavBar';
import { Mobilemenu } from './components/Mobilemenu';
import { Upload } from './pages/upload/Upload';

export const App = () => {
	
	const pathName = useLocation().pathname;
    const navigate = useNavigate();

	const [mobilemenuActive, setMobilemenuActive] = useState(false);

	const [modalActive, setModalActive] = useState(false);

	const [currentBreed, setCurrentBreed] = useState(null);

	const [addVoteResponse, setAddVoteResponse] = useState({});
	const [isDeleteVote, setIsDeleteVote] = useState({});

	const [addToFavouritesResponse, setAddToFavouritesResponse] = useState({});
	const [isDeleteFromFavourites, setIsDeleteFromFavourites] = useState({});

    const [searchInput, setSearchInput] = useState('');
	const [searchResult, setSearchResults] = useState([]);
	const [clickSearchResult, setClickSearchResult] = useState([]);
	const [searchFor, setSearchFor] = useState('');

	const {votes, votesFetchStatus} = useGetVotes([
		addVoteResponse, 
		isDeleteVote
	]);

	const {favourites, favouritesFetchStatus} = useGetFavourites([
		addToFavouritesResponse, 
		isDeleteFromFavourites
	]);

	const {allVotes} = useJoinVotes(
		votes, 
		favourites, 
		[votes, favourites]
	);

	const {breeds} = useGetBreeds([]);

	const handlerCurrentBreed = (breed) => {
		setCurrentBreed(breed);
	};

	const handlerSearchResult = (breed) => {
		setClickSearchResult(breed);
		setSearchFor(breed[0].name);
		setSearchInput('');
		navigate('/search');
	};

	const handlerSearchKeyPress = (event) => {
		if(event.key === 'Enter' && searchInput) {
			setClickSearchResult(searchResult);
			setSearchFor(searchInput);
			setSearchInput('');
            navigate('/search');
		};
	};

	const searchBreed = () => {		
		setSearchResults(
			(breeds && breeds.length !== 0 && searchInput) && 
				breeds.filter(
					breed => breed.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
				)
		);
	};
	
	useBodyOverflow(modalActive, mobilemenuActive);

	useEffect(() => {
		searchBreed();
	}, [searchInput]);

	return (
		<div className="wrapper">
			<div className="container">
				<Navigation 
					class={pathName === '/' ? 'block' : 'none'} 
				/>
				<div className={pathName === '/' ? 'pages main' : 'pages'}>
					{pathName !== '/' && (
						<NavBar 
							setMobilemenuActive={setMobilemenuActive} 
							searchInput={searchInput} 
							setSearchInput={setSearchInput} 
							searchResult={searchResult} 
							handlerSearchKeyPress={handlerSearchKeyPress} 
							handlerSearchResult={handlerSearchResult} 
						/>
					)}
					<Routes>
						<Route index element={<Home />} />
						<Route path="voting" element={<Voting 
							allVotes={allVotes} 
							setAddToFavouritesResponse={setAddToFavouritesResponse} 
							setAddVoteResponse={setAddVoteResponse} 
							votesFetchStatus={votesFetchStatus} 
							favouritesFetchStatus={favouritesFetchStatus} 
						/> } />
						<Route path="breeds" element={<Breeds 
							handlerCurrentBreed={handlerCurrentBreed} 
							breeds={breeds} 
						/>} />
						<Route path="breed" element={<Breed 
							currentBreed={currentBreed} 
						/>} />
						<Route path="gallery" element={<Gallery 
							setModalActive={setModalActive} 
							breeds={breeds} 
							favourites={favourites} 
							setAddToFavouritesResponse={setAddToFavouritesResponse} 
							setIsDeleteFromFavourites={setIsDeleteFromFavourites} 
						/>} />
						<Route path="likes" element={<Likes 
							likes={votes.filter(vote => vote.value === 1)} 
							setIsDeleteVote={setIsDeleteVote} 
							votesFetchStatus={votesFetchStatus} 
						/>} />
						<Route path="favourites" element={<Favourites 
							favourites={favourites} 
							setIsDeleteFromFavourites={setIsDeleteFromFavourites} 
							favouritesFetchStatus={favouritesFetchStatus} 
						/>} />
						<Route path="dislikes" element={<Dislikes 
							dislikes={votes.filter(vote => vote.value === 0)} 
							setIsDeleteVote={setIsDeleteVote} 
							votesFetchStatus={votesFetchStatus} 
						/>} />
						<Route path="search" element={<Search 
							handlerCurrentBreed={handlerCurrentBreed} 
							searchFor={searchFor} 
							clickSearchResult={clickSearchResult} 
						/>} />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</div>
			</div>
			<Mobilemenu 
				mobilemenuActive={mobilemenuActive} 
				setMobilemenuActive={setMobilemenuActive} 
			/>
			<Modal 
				modalActive={modalActive} 
				setModalActive={setModalActive} 
			>
				<Upload 
					setModalActive={setModalActive} 
				/>
			</Modal>
		</div>
	)
};

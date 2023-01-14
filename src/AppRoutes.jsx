import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { VotingPage } from './pages/voting/VotingPage';
import { BreedsContainer } from './pages/breeds/BreedsContainer';
import { BreedContainer } from './pages/breed/BreedContainer';
import { GalleryContainer } from './pages/gallery/GalleryContainer';
import { LikesContainer } from './pages/likes/LikesContainer';
import { FavoritesContainer } from './pages/favourites/FavoritesContainer';
import { DislikesContainer } from './pages/dislikes/DislikesContainer';
import { SearchContainer } from './pages/search/SearchContainer';
import { Notfound } from './pages/notfound/Notfound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/voting" element={<VotingPage />} />
            <Route path="/breeds" element={<BreedsContainer />} />
            <Route path="/breeds/:id" element={<BreedContainer />} />
            <Route path="/gallery" element={<GalleryContainer />} />
            <Route path="/likes" element={<LikesContainer />} />
            <Route path="/favorites" element={<FavoritesContainer />} />
            <Route path="/dislikes" element={<DislikesContainer />} />
            <Route path="/search" element={<SearchContainer />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
};

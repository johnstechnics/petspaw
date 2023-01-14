import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const breedsAPI = {
    async getBreeds() {
        try {
            const response = await axios.get(`${API_URL}/breeds`);
            return response.data;
        } catch(error) {
            console.log(error);
        };
    }
};

export const votingAPI = {
    async getVotes() {
        try {
            const response = await axios.get(`${API_URL}/votes`);
            return response;
        } catch(error) {
            console.log(error);
        };
    },
    async getFavorites() {
        try {
            const response = await axios.get(`${API_URL}/favourites`);
            return response;
        } catch(error) {
            console.log(error);
        };
    },
    async createVote(imageId, value) {
        try {
            const response = await axios.post(`${API_URL}/votes`, {
                'image_id': imageId,
                'value': value
            }, {
                headers: {
                    'content-type': 'application/json'
                }
            });
            return response.status;
        } catch(error) {
            console.log(error);
        };
    },
    async deleteVote(imageId) {
        try {
            const response = await axios.delete(`${API_URL}/votes/${imageId}`);
            return response.status;
        } catch(error) {
            console.log(error);
        };
    },
    async addToFavorites(imageId) {
        try {
            const response = await axios.post(`${API_URL}/favourites`, {
                'image_id': imageId,
                'sub_id': 'null'
            }, {
                headers: {
                    'content-type': 'application/json'
                }
            });
            return response.status;
        } catch(error) {
            console.log(error);
        };
    },
    async deleteFromFavorites(favoriteId) {
        try {
            const response = await axios.delete(`${API_URL}/favourites/${favoriteId}`);
            return response.status;
        } catch(error) {
            console.log(error);
        };
    }
};

export const imagesAPI = {
    async getSingleImage() {
        try {
            const response = await axios.get(`${API_URL}/images/search?size=med`);
            return response.data;
        } catch(error) {
            console.log(error);
        };
    },
    async getSliderImages(breedId) {
        try {
            const response = await axios.get(`${API_URL}/images/search?breed_id=${breedId}&limit=5`);
            return response.data;
        } catch(error) {
            console.log(error);
        };
    },
    async getGalleryImages(galleryOrder, galleryType, galleryBreed, galleryLimit) {
        try {
            const response = await axios.get(`${API_URL}/images/search?order=${galleryOrder}&mime_types=${galleryType}&breed_id=${galleryBreed}&limit=${galleryLimit}`);
            return response.data;
        } catch(error) {
            console.log(error);
        };
    }
};

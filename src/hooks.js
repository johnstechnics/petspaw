import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

export const useTheme = () => {
    const [theme, setTheme] = useState( localStorage.getItem('app_theme') || 'light' );
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    localStorage.setItem( 'app_theme', theme );
    return {theme, setTheme};
};

export const useGetBreeds = (dependencies) => {
    const [breeds, setBreeds] = useState([]);
	const [breedsOrder, setBreedsOrder] = useState('AZ');
    useEffect(() => {
        fetch(`${API_URL}/breeds`)
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

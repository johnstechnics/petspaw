import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BreedsPage } from './BreedsPage';
import {
    changeBreedsLimit,
    setBreedsLimitFiltered,
    changeBreedsOrder,
    setBreedsOrderFiltered,
    setSingleBreed
} from '../../store/breeds-reducer';
import {
    breedsSelector,
    breedsFilteredSelector,
    breedsLimitSelector,
    breedsOrderAscSelector
} from '../../store/selectors';
import { useNavigate } from 'react-router-dom';

export const BreedsContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const breeds = useSelector(breedsSelector);
    const breedsToRender = useSelector(breedsFilteredSelector);
    const breedsLimit = useSelector(breedsLimitSelector);
    const breedsOrderAsc = useSelector(breedsOrderAscSelector);

    const breedsLimitSelectData = [
        { value: 5, text: 'Limit: 5' },
        { value: 10, text: 'Limit: 10' },
        { value: 15, text: 'Limit: 15' },
        { value: 20, text: 'Limit: 20' },
        { value: breeds.length, text: 'Limit: All' }
    ];

    const breedsSingleSelectData = [
        {
            value: 0,
            text: 'All breeds'
        },
        ...breeds.map(breed => (
            {
                value: breed.id,
                text: breed.name
            }
        ))
    ];

    // console.log(breedsSingleSelectData);

    const handlerBreedsLimit = (limit) => {
        dispatch(changeBreedsLimit(limit));
        console.log(limit);
    };

    const handlerBreedsOrder = (value) => {
        dispatch(changeBreedsOrder(value));
    };

    const breedsSort = () => {
        if (breedsOrderAsc) {
            return breeds.slice(0, breedsLimit);
        } else {
            return breeds.slice(0, breedsLimit).reverse();
        };
    };

    const handlerSingleBreedId = (id) => {
        dispatch(setSingleBreed(id === 0 ? breedsSort() : [breeds.find((breed) => breed.id === id)]));
    };

    const handlerSingleBreedRedirect = (id) => {
        navigate(`/breeds/${id}`);
    };

    useEffect(() => {
        dispatch(setBreedsLimitFiltered(breedsSort()));
    }, [breedsLimit]);

    useEffect(() => {
        dispatch(setBreedsOrderFiltered(breedsSort()));
    }, [breedsOrderAsc]);

    useEffect(() => {
        console.log('rerender');
    });

    return (
        <BreedsPage
            breedsLimitSelectData={breedsLimitSelectData}
            breedsSingleSelectData={breedsSingleSelectData}
            breeds={breeds}
            breedsToRender={breedsToRender}
            breedsOrderAsc={breedsOrderAsc}
            handlerBreedsLimit={handlerBreedsLimit}
            handlerBreedsOrder={handlerBreedsOrder}
            handlerSingleBreedId={handlerSingleBreedId}
            handlerSingleBreedRedirect={handlerSingleBreedRedirect}
        />
    );
};

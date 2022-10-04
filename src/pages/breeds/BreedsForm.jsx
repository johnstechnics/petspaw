import { useRef } from 'react';
import { useEffect } from 'react';
import { ReactComponent as SortingazImg } from '../../assets/img/sorting_a_z.svg';
import { ReactComponent as SortingzaImg } from '../../assets/img/sorting_z_a.svg';
import { CustomSelect } from '../../components/CustomSelect';

export const BreedsForm = (props) => {

    const breedsSelectData = useRef([{value: '', text: 'All breeds'}]);

    const limitSelectData = useRef([
        {value: 5, text: 'Limit: 5'},
        {value: 10, text: 'Limit: 10'},
        {value: 15, text: 'Limit: 15'},
        {value: 20, text: 'Limit: 20'}
    ]);

    useEffect(() => {
        props.breeds.forEach(({id, name}) => {
            breedsSelectData.current.push({value: id, text: name});
        });
        limitSelectData.current[4] = {value: props.breeds.length, text: 'Limit: All'};
    }, [props.breeds]);

	return (
        <form className="breeds__form" action="">
            <CustomSelect 
                data={breedsSelectData.current} 
                onChange={props.setSomeOneBreedId} 
                selectClass={'breeds__form_breeds'} 
            />
            <CustomSelect 
                data={limitSelectData.current} 
                onChange={props.handlerBreedsLimit} 
                selectClass={'breeds__form_limit'} 
            />
            <button 
                type="button" 
                value={props.breedsRenderedSort ? 'active' : ''}
                onClick={props.handlerBreedsSort} 
                className={props.breedsRenderedSort ? (
                        'breeds__sorting_az active'
                    ) : (
                        'breeds__sorting_az'
                    )}
            >
                <SortingazImg />
            </button>
            <button 
                type="button" 
                value={!props.breedsRenderedSort ? 'active' : ''}
                onClick={props.handlerBreedsSort} 
                className={!props.breedsRenderedSort ? (
                        'breeds__sorting_za active'
                    ) : (
                        'breeds__sorting_za'
                    )} 
            >
                <SortingzaImg />
            </button>
        </form>
	)
};

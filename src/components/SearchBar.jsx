import { useState } from 'react';
import { ReactComponent as SearchImg } from '../assets/img/search.svg';
import { ReactComponent as CloseImg } from '../assets/img/close.svg';

export const SearchBar = (props) => {

    const [isSearchInputFocus, setSearchInputFocus] = useState(false);

    return (
        <div className="search__wrap">
            <input 
                onFocus={() => setSearchInputFocus(true)} 
                onBlur={() => setSearchInputFocus(false)} 
                className="search__input" 
                type="text" 
                placeholder="Search for breeds by name" 
                onChange={event => props.setSearchInput(event.target.value)} 
                value={props.searchInput} 
                onKeyPress={props.handlerSearchKeyPress} 
                title={props.searchInput && 'Click on some breed or press enter'} 
            />
            <div 
                className={`search__prompt_wrap ${
                    props.searchResult && 
                    props.searchResult.length && 
                    isSearchInputFocus ? (
                        'open'
                    ) : (
                        ''
                    )
                }`}
            >
                <div className="search__prompt">
                    {props.searchResult && props.searchResult.map(breed => (
                        <div 
                            className="search__prompt_item" 
                            key={breed.id} 
                            onClick={() => {props.handlerSearchResult([breed])}} 
                            onMouseDown={event => {event.preventDefault()}}
                        >
                            {breed.name}
                        </div>
                    ))}
                </div>
            </div>
            {props.searchInput ? (
                <div 
                    className="search__btn" 
                    onClick={() => props.setSearchInput('')}
                >
                    <CloseImg />
                </div>
            ) : (
                <div className="search__btn">
                    <SearchImg />
                </div>
            )}
        </div>
    )
};

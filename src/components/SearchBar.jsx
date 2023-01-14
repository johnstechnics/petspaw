import { ReactComponent as SearchImg } from '../assets/img/search.svg';
import { ReactComponent as CloseImg } from '../assets/img/close.svg';

export const SearchBar = (props) => {
    return (
        <div className="search__wrap">
            <input
                onFocus={() => props.handlerChangeSearchInputFocus(true)}
                onBlur={() => props.handlerChangeSearchInputFocus(false)}
                className="search__input"
                type="text"
                placeholder="Search for breeds by name"
                onChange={props.handlerSearchInput}
                value={props.searchInput}
                onKeyPress={props.handlerEnterResult}
                title={props.searchInput && 'Click on some breed or press enter'}
            />
            <div
                className={`search__prompt_wrap ${props.foundBreeds &&
                    props.foundBreeds.length &&
                    props.searchInputFocus ? (
                    'open'
                ) : (
                    ''
                )
                    }`}
            >
                <div className="search__prompt">
                    {props.foundBreeds && props.foundBreeds.map(breed => (
                        <div
                            className="search__prompt_item"
                            key={breed.id}
                            onClick={() => props.handlerClickResult(breed.id)}
                            onMouseDown={event => { event.preventDefault() }}
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

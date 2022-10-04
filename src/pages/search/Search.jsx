import { Breadcrumbs } from '../../components/Breadcrumbs';
import { NoItems } from '../../components/NoItems';
import { SearchImgPattern } from './SearchImgPattern';

export const Search = (props) => {
    return (
        <div className="search page">
            <div className="page__content">
                <div className="page__options">
					<Breadcrumbs />
				</div>
                <p className="search__for">
                    Search results for: <span>{props.searchFor}</span>
                </p>
                {props.clickSearchResult.length !== 0 ? (
                    <SearchImgPattern 
                        clickSearchResult={props.clickSearchResult} 
                        handlerCurrentBreed={props.handlerCurrentBreed} 
                    />
                ) : (
                    <NoItems />
                )}
            </div>
        </div>
    )
};

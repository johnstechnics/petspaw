import { useLocation } from 'react-router-dom';
import { GoBack } from './GoBack';

export const Breadcrumbs = () => {

    const currentPage = useLocation().pathname.slice(1);

    return (
        <div className="breadcrumbs">
			<GoBack />
			<div className="current__page">
                {currentPage}
            </div>
		</div>
    )
};

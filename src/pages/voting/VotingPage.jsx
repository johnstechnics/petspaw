import { Breadcrumbs } from '../../components/Breadcrumbs';
import { VotingCardContainer } from './VotingCard/VotingCardContainer';
import { VotingActionsContainer } from './VotingActions/VotingActionsContainer';

export const VotingPage = () => (
	<div className="voting page">
		<div className="page__content">
			<div className="page__options">
				<Breadcrumbs currentPage={'voting'} />
			</div>
			<VotingCardContainer />
			<VotingActionsContainer />
		</div>
	</div>
);

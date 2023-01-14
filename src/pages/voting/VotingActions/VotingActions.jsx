import { VotingActionsItem } from './VotingActionsItem';
import { Loader } from '../../../components/Loader';
import { NoItems } from '../../../components/NoItems';

export const VotingActions = (props) => {

    // console.log(props);

    return (
        <div className="action__log">
            {props.votesAndFavorites.length === 0 ? (
                props.isGetVotesSuccess.status && props.isGetFavoritesSuccess.status ? (
                    <NoItems />
                ) : (
                    <Loader />
                )
            ) : (
                props.votesAndFavorites.map(vote => (
                    <VotingActionsItem
                        vote={vote}
                        key={vote.id}
                    />
                ))
            )}
        </div>
    )
};

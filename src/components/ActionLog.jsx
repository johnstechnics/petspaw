import { ActionLogItem } from './ActionLogItem';
import { Loader } from './Loader';
import { NoItems } from './NoItems';

export const ActionLog = (props) => {
    return (
		<div className="action__log">
            {props.allVotes.length === 0 ? (
                props.votesFetchStatus || props.favouritesFetchStatus ? (
                    <Loader />
                ) : (
                    <NoItems />
                )
            ) : (
                props.allVotes.map(vote => (
                    <ActionLogItem 
                        vote={vote} 
                        key={vote.id} 
                    />
                ))
            )}
        </div>
    )
};

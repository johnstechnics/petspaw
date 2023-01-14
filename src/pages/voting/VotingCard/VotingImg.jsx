export const VotingImg = (props) => {

    console.log(props.isVotingImageLoad);

    return (
        <div className={props.isVotingImageLoad.status ? 'voting__img' : 'voting__img img__loading'}>
            <img
                src={props.votingImg.url}
                alt={props.votingImg.id}
                onLoad={props.onImageLoad}
            />
        </div>
    )
};

export const VotingImg = (props) => (
    <div className={props.isImgLoaded ? 'voting__img' : 'voting__img img__loading'}>
        <img 
            src={props.votingImg.url} 
            alt={props.votingImg.id} 
            onLoad={props.imgLoaded} 
        />
    </div>
);

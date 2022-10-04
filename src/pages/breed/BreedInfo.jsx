export const BreedInfo = (props) => {
	return (
        <div className="breed__info">
            <p className="breed__name">
                {props.currentBreed.name}
            </p>
            <p className="breed__for">
                {props.currentBreed.bred_for}
            </p>
            <div className="breed__desc">
                <p className="breed__temperament">
                    <span>Temperament: </span>
                    {props.currentBreed.temperament}
                </p>
                <div className="breed__params">
                    <p className="breed__height">
                        <span>Height: </span>
                        {props.currentBreed.height.metric}
                    </p>
                    <p className="breed__weight">
                        <span>Weight: </span>
                        {props.currentBreed.weight.metric}
                    </p>
                    <p className="breed__lifespan">
                        <span>Life span: </span>
                        {props.currentBreed.life_span}
                    </p>
                </div>
            </div>
        </div>
	)
};

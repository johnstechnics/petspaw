import { Loader } from "../../components/Loader"

export const BreedInfo = (props) => {
    return (
        !props.breed ? (
            <Loader />
        ) : (
            <div className="breed__info">
                <p className="breed__name">
                    {props.breed.name}
                </p>
                <p className="breed__for">
                    {props.breed.bred_for}
                </p>
                <div className="breed__desc">
                    <p className="breed__temperament">
                        <span>Temperament: </span>
                        {props.breed.temperament}
                    </p>
                    <div className="breed__params">
                        <p className="breed__height">
                            <span>Height: </span>
                            {props.breed.height.metric}
                        </p>
                        <p className="breed__weight">
                            <span>Weight: </span>
                            {props.breed.weight.metric}
                        </p>
                        <p className="breed__lifespan">
                            <span>Life span: </span>
                            {props.breed.life_span}
                        </p>
                    </div>
                </div>
            </div>
        )
    )
};

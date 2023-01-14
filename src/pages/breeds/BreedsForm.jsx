import { ReactComponent as SortingAZImg } from '../../assets/img/sorting_a_z.svg';
import { ReactComponent as SortingZAImg } from '../../assets/img/sorting_z_a.svg';
import { CustomSelect } from '../../components/CustomSelect';

export const BreedsForm = (props) => {
    return (
        <form className="breeds__form" action="">
            <CustomSelect
                data={props.breedsSingleSelectData}
                onChange={props.handlerSingleBreedId}
                selectClass={'breeds__form_breeds'}
            />
            <CustomSelect
                data={props.breedsLimitSelectData}
                onChange={props.handlerBreedsLimit}
                selectClass={'breeds__form_limit'}
            />
            <button
                type="button"
                value={props.breedsOrderAsc ? 'active' : ''}
                onClick={() => props.handlerBreedsOrder(true)}
                className={props.breedsOrderAsc ? (
                    'breeds__sorting_az active'
                ) : (
                    'breeds__sorting_az'
                )}
            >
                <SortingAZImg />
            </button>
            <button
                type="button"
                value={props.breedsOrderAsc ? '' : 'active'}
                onClick={() => props.handlerBreedsOrder(false)}
                className={props.breedsOrderAsc ? (
                    'breeds__sorting_za'
                ) : (
                    'breeds__sorting_za active'
                )}
            >
                <SortingZAImg />
            </button>
        </form>
    )
};

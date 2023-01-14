import { CloseBtn } from './CloseBtn';
import { Navlinks } from './Navlinks';

export const Mobilemenu = (props) => {
    return (
        <div 
            className={props.mobilemenuActive ? (
                'mobilemenu active'
            ) : (
                'mobilemenu'
            )}
        >
			<CloseBtn 
                setFalse={props.setMobilemenuActive} 
            />
            <Navlinks 
                mobilemenuActive={props.mobilemenuActive} 
                setMobilemenuActive={props.setMobilemenuActive} 
            />
        </div>
    )
};

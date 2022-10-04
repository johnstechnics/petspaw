import { useTheme } from '../hooks';
import { ReactComponent as Eye } from '../assets/img/eye.svg';
import { ReactComponent as EyeC } from '../assets/img/eye_c.svg';

export const ThemeSwitch = () => {

    const {theme, setTheme} = useTheme();

    const handleThemeSwitch = () => {
        if(theme === 'light') {
            setTheme('dark');
        } else if(theme === 'dark') {
            setTheme('light');
        }
    };

    return (
        <div className="theme">
            <div className="theme__eye">
                <Eye className="eye__img_n" />
                <EyeC className="eye__img_c" />
            </div>
            <button 
                onClick={handleThemeSwitch} 
                className={`theme__button ${theme}`} 
            >
            </button>
	    </div>
    )
};

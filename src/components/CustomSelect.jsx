import { useEffect, useState } from "react";

export const CustomSelect = ({
    data = [], 
    onChange = () => {}, 
    selectClass = ''
}) => {

    const [open, setOpen] = useState(false);
    const [optionValue, setOptionValue] = useState();
    const [optionInner, setoptionInner] = useState();

    useEffect(() => {
        onChange(optionValue ? (
            optionValue
                ) : data.length !== 0 ? (
                    data[0].value
                ) : (
                    ''
        ));
    }, [optionValue]);
    
    return (
        <div className={`customselect ${selectClass} ${open ? 'open' : ''}`}>
            <button 
                type="button" 
                className="customselect__select" 
                onClick={() => {setOpen(value => !value)}} 
                onBlur={() => {setOpen(false)}}
                onKeyDown={event => {event.key === 'Escape' && setOpen(false)}}
            >
                <span>
                    {optionInner ? (
                        optionInner
                    ) : data.length !== 0 ? (
                        data[0].text
                    ) : (
                        ''
                    )}
                </span>
            </button>
            <div className="customselect__options_wrap">
                <div className="customselect__options">
                    {data.map(item => (
                        <div 
                            key={item.value + item.text} 
                            className="customselect__option" 
                            onClick={() => {
                                setOptionValue(item.value); 
                                setoptionInner(item.text); 
                                setOpen(false);
                            }}
                            onMouseDown={event => {event.preventDefault()}}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

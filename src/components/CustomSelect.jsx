import { useEffect, useState } from "react";

export const CustomSelect = ({
    data = [],
    defaultValue = '',
    onChange = () => { },
    selectClass = ''
}) => {

    const [open, setOpen] = useState(false);
    const [optionValue, setOptionValue] = useState('');
    const [optionText, setOptionText] = useState('');

    const findOption = () => {
        data.forEach(option => {
            if (option.value === defaultValue) {
                setOptionValue(option.value);
                setOptionText(option.text);
            };
        });
    };

    useEffect(() => {
        if (defaultValue) {
            findOption();
        } else if (data.length !== 0) {
            setOptionValue(data[0].value);
            setOptionText(data[0].text);
        } else {
            setOptionValue('');
            setOptionText('');
        };
    }, []);

    useEffect(() => {
        onChange(optionValue);
    }, [optionValue]);

    return (
        <div className={`custom-select ${selectClass} ${open ? 'open' : ''}`}>
            <button
                type="button"
                className="custom-select__select"
                onClick={() => { setOpen(value => !value) }}
                onBlur={() => { setOpen(false) }}
                onKeyDown={event => { event.key === 'Escape' && setOpen(false) }}
            >
                <span>
                    {optionText}
                </span>
            </button>
            <div className="custom-select__options-wrap">
                <div className="custom-select__options">
                    {data.map(item => (
                        <div
                            key={item.value + item.text}
                            className="custom-select__option"
                            onClick={() => {
                                setOptionValue(item.value);
                                setOptionText(item.text);
                                setOpen(false);
                            }}
                            onMouseDown={event => { event.preventDefault() }}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

import React, {useState} from 'react';
import {getIn} from 'formik';
import PhoneInput from "react-phone-input-2";
import PropTypes from "prop-types";
import 'react-phone-input-2/lib/style.css'


const PhoneInputField = (props) => {
    const {
        className,
        field: { name, value },
        form: {
            errors, handleBlur, setFieldValue, touched,
        },
        form,
        label,
        country,
        onChange,
        disabled,
    } = props;

    const [isFocused, setFocused] = useState(false);
    const isError = getIn(touched, name) && getIn(errors, name);
    const errorStyle = isError ? 'error' : '';
    const filledStyle = (isFocused || value) ? 'filled' : '';
    const disabledStyle = disabled ? 'disabled' : '';

    const handleInputBlur = (e) => {
        setFocused(false);
        handleBlur(e);
    };

    const handleInputFocus = () => setFocused(true);

    const onValueChange = (phoneNumber) => {
        setFieldValue(name, phoneNumber);

        if (onChange !== null) {
            onChange(phoneNumber);
        }
    };

    return (
        <div className={`${className} ${errorStyle} ${filledStyle} ${disabledStyle} text-input-group`}>
            <PhoneInput
                name={name}
                value={value}
                onChange={onValueChange}
                country={country}
                disableCountryCode={true}
                disableDropdown={true}
                disableSearchIcon={true}
            />
            <label className="transition ml-10" htmlFor={name}>
                {label}
            </label>
            <div className="flex h-5 items-end text-red-100 text-xs">
                {isError && getIn(errors, name)}
            </div>
        </div>
    );
};

PhoneInputField.propTypes = {
    className: PropTypes.string,
    form: PropTypes.any.isRequired,
    field: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string,
    country: PropTypes.string,
    disabled: PropTypes.bool,
};

PhoneInputField.defaultProps = {
    className: '',
    label: '',
    onChange: null,
    country: 'AU',
    disabled: false,
};

export default PhoneInputField;
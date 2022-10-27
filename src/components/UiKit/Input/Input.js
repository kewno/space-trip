import React from 'react';
import './input.scss';

const Input = ({value, onChange, onBlur, type, id, error, success, func, children, ...attr}) => {
    let className = 'input__elem';
    if (success) className = 'input__elem input__elem_success'
    else if (error) className = 'input__elem input__elem_error'

    return (
        <div className={'input'}>
            <input
                type={type}
                id={id}
                onClick={func}
                className={className}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor={id} className={value === '' ? 'input__label' : 'input__label input__label_top'}>{children}</label>
            {error ? <p className={'input__error'}>{error}</p> : null}
        </div>
    )
}

export default Input
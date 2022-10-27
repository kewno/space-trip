import React from 'react';
import {NavLink} from "react-router-dom"
import './button.scss';

const Button = ({id, href, disable, children, func, type, ...attr}) => {
    let buttonClass = 'btn__elem';
    if (disable)
        buttonClass = 'btn__elem btn__elem_disable';

    let handleClick = () => {
        return disable ? null : func()
    }
    return (
        <div className='btn'>
            {href ?
                <NavLink onClick={() => handleClick()} className={buttonClass} to={`/${href}`}>{children}</NavLink>
                :
                <button onClick={() => handleClick()} className={buttonClass} type={type}>{children}</button>
            }
        </div>
    )

}
export default Button
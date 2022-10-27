import React, {useEffect, useState} from 'react';
import './timer.scss';

const Timer = ({time, name, ...attr}) => {

    return (
        <div className="timer">
            {name ? <h2 className="timer__name">{`Клиент: ${name}`}</h2> : null}
            <p className="timer__time">{`${time} лет`}</p>
        </div>
    )
}

export default Timer
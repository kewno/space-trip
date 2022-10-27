import React, {useEffect} from 'react';
import './сabinet.scss';
import WrapStarship from "../../hoc/WrapStarship";
import {getStarshipRentThunkCreator, getStarShipsThunkCreator} from "../../redux/starShipSlice";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';
import {initUser, logout} from "../../redux/userSlice";

const Cabinet = ({email='kkewno@mail.ru', starships, ...attr}) => {

    let dispatch = useDispatch()
    let startDate, endDate

    useEffect(()=> {
        dispatch(getStarShipsThunkCreator())
        dispatch(initUser())

        let date = new Date();
        startDate = `${date.toISOString('YYYY-MM-DDTHH:mm:ss')}`
        date.setSeconds(date.getSeconds() + 1);
        endDate = `${date.toISOString('YYYY-MM-DDTHH:mm:ss')}`

        dispatch(getStarshipRentThunkCreator(startDate, endDate))
    }, [])

    let starShips = useSelector(store => store.ship.starShips)

    let user = useSelector(store => store.user.user)

    let handleClick = () => {
        dispatch(logout())
    }

    return (
        <div className='cabinet'>
            {user.email || user.id ? null : <Navigate to={'/sign-in'} />}
            <div className="cabinet-data">
                <h2 className="cabinet-data__headline">{`Добро пожаловать: ${user.email}`}</h2>
                <p className="cabinet-data__logout" onClick={() => handleClick()}>Выйти</p>
            </div>
            <div className="cabinet-starships">
                {starShips.map(el => {
                    return <WrapStarship key={el.id} id={el.id} name={el.name} img={el.img}/>
                })}
            </div>
        </div>
    )
}

export default Cabinet
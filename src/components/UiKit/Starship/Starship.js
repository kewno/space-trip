import React, {useEffect, useState} from 'react';
import './starship.scss';
import Button from "../Button/Button";
import Timer from "../Timer/Timer";
import {useDispatch, useSelector} from "react-redux";
import {
    delStarShipRentsLocal,
    setStarShipRentsLocal,
    setStarshipRentThunkCreator,
} from "../../../redux/starShipSlice";

const Starship = ({id, time, nameRent='Andrey', useRent, img, starshipYears, setStarshipYears, name = 'Легковой', status, ...attr}) => {

    let handleClick = (coll) => {
        if (starshipYears + coll > 10 || starshipYears + coll < 3) return
        else setStarshipYears(starshipYears + coll)
    }
    let dispatch = useDispatch()
    let collRent = useSelector(store => store.ship.setStarShipRentsLocal).length

    //for server add Rent

    let date = new Date();
    let startDate = `${date.toISOString('YYYY-MM-DDTHH:mm:ss.sss')}`
    date.setSeconds(date.getSeconds() + 1);
    let endDate = `${date.toISOString('YYYY-MM-DDTHH:mm:ss.sss')}`

    let idUser = useSelector(store => store.user.user.id)

    useEffect(() => {
        if (!status) {
            let timer = setInterval(() => {
                setStarshipYears(--starshipYears)
                if (starshipYears <= 0) {
                    clearInterval(timer)
                    setStarshipYears(3)
                    dispatch(delStarShipRentsLocal({id}))
                }

            }, 1000)
        }
    }, [status])

    return (
        <div className="starship">
            <div className="starship-img">
                {img ?
                    <img className='starship-img__img' src={require(`./../../../img/${img}`)} alt="starship"/>
                :
                    null
                }
                <div className="starship-img__dark"/>
                <div className="starship-img__container-name">
                    <h2 className="starship-img__name">{name}</h2>
                </div>
            </div>

            <div className="starship-content">
                <p className="starship-content__elem">{`Статус: ${status ? 'свободен' : 'арендован'}`}</p>

                {status ?
                    <div className="starship-rent">
                        <p className="starship-content__elem">{'Срок: '}</p>
                        <div className="starship-years">
                            <div className="starship-years__point" onClick={() => handleClick(-1)}>
                                <span>-</span>
                            </div>
                            <p className="starship-years__year">{`${starshipYears}`}</p>
                            <div className="starship-years__point" onClick={() => handleClick(1)}>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    :
                    <Timer time={starshipYears} name={'Andrey'}/>
                }

                <div className="starship-content__btn">
                    <Button
                        disable={!status || collRent > 1}
                        id={'arend'}
                        func={() => {
                            dispatch(setStarShipRentsLocal({id, starshipYears}))
                            dispatch(setStarshipRentThunkCreator(idUser, id, starshipYears, startDate, endDate))
                            //dispatch(getStarshipRentThunkCreator(startDate, endDate))
                        }}
                    >Арендовать</Button>
                </div>
            </div>

        </div>
    )
}

export default Starship
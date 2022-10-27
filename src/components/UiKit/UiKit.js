import React, {useState} from 'react';
import './ui-kit.scss';
import Button from "./Button/Button";
import Input from "./Input/Input";
import Timer from "./Timer/Timer";
import Starship from "./Starship/Starship";
import {
    getStarShipsThunkCreator,
} from "../../redux/starShipSlice";
import {useDispatch} from "react-redux";

const UiKit = () => {

    let [textOne, setTextOne] = useState('');
    let [textTwo, setTextTwo] = useState('');
    let [textThree, setTextThree] = useState('');


    let [starshipYears, setStarshipYears] = useState(1);


    return (
        <div className='ui-kit'>
            <div className='button-container'>
                <div className="button-container__button">
                    <Button
                        href={'/'}>
                    Кнопка</Button>
                </div>
                <div className="button-container__button">
                    <Button
                        href={'/'}
                        disable
                    >Disable</Button>
                </div>
                <div className="button-container__button">
                    <Button
                        id={'btn-1'}
                    >Войти</Button>
                </div>
            </div>

            <div className='inputs-container'>
                <div className='inputs-container__input'>
                    <Input type={'text'} id='input-1' value={textOne} onChange={e => setTextOne(e.target.value)}>Адресс
                        эл. почты</Input>
                </div>
                <div className='inputs-container__input'>
                    <Input type={'text'} id='input-2' value={textTwo} onChange={e => setTextTwo(e.target.value)}
                           success={true}>Пароль</Input>
                </div>
                <div className='inputs-container__input'>
                    <Input type={'text'} id='input-3' value={textThree} onChange={e => setTextThree(e.target.value)}
                           error={'Ошибка'}>Пароль</Input>
                </div>
            </div>

            <div className="timer-container">
                <Timer time={'10'} name={'Andrey'}/>
            </div>

            <div className="starship">
                <Starship starshipYears={starshipYears} setStarshipYears={setStarshipYears}/>
            </div>


        </div>


    )
}

export default UiKit
import React, {useEffect} from 'react';
import './register.scss';
import * as yup from "yup";
import {Formik} from "formik";
import Input from "../UiKit/Input/Input";
import {Navigate, NavLink} from "react-router-dom";
import Button from "../UiKit/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addUserThunkCreator, initUser} from "../../redux/userSlice";

const Register = () => {

    const validationsSchema = yup.object().shape({
        emailA : yup.string().email('Введите верный email').required('Обязательно'),
        passwordA: yup.string().required('Обязательно'),
    });
    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(initUser())
    }, [])

    let userError = useSelector(store => store.user.error)
    if (userError === 'Email is busy') alert(userError)

    let user = useSelector(store => store.user.user)

    return (
        <div className="signin">
            {user.email || user.id ? <Navigate to={'/'} /> : null}
            <Formik initialValues={{
                emailA: '',
                passwordA: ''
            }}
                    validateOnBlur
                    onSubmit={(data) => {dispatch(addUserThunkCreator(data.emailA, data.passwordA))}}
                    validationSchema={validationsSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div className="signin-form">
                        <h1 className="signin-form__headline">Регистрация</h1>
                        <div className="signin-form__input">
                            <Input
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.emailA}
                                type={'text'}
                                id='emailA'
                                error={errors.emailA ? errors.emailA : null}
                                success={!errors.emailA && values.emailA ? true : null}
                            >E-mail</Input>
                        </div>

                        <div className="signin-form__input">
                            <Input
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.passwordA}
                                type={'password'}
                                id='passwordA'
                                error={errors.passwordA ? errors.passwordA : null}
                                success={!errors.passwordA && values.passwordA ? true : null}
                            >Пароль</Input>
                        </div>


                        <div className="signin-form__btn">
                            <Button
                                disable={errors.emailA || errors.passwordA}
                                func={() => handleSubmit()}
                                type={'submit'}
                            >Войти</Button>
                        </div>

                        <p className="signin-form__description">У вас уже есть аккаунт?</p>
                        <NavLink className="signin-form__href" to={'/sign-in'}>Войти</NavLink>
                    </div>
                )}
            </Formik>

        </div>
    )
}

export default Register
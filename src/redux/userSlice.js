import {createSlice} from "@reduxjs/toolkit";
import {userAPI} from "../api/api";

const userSlice = createSlice({
    name: 'userShip',
    initialState: {
        error: '',
        user: {
            id: null,
            email: null
        }
    },
    reducers: {
        initUser(state) {
            //console.log(localStorage.getItem('id'))
            state.user.id = localStorage.getItem('id')
            state.user.email = localStorage.getItem('email')
        },
        setUser(state, action) {
            localStorage.setItem('email', action.payload.email)
            localStorage.setItem('id', action.payload.id)
        },
        setError(state, action) {
            state.error = action.payload
        },
        logout(state) {
            state.user = {}
            localStorage.setItem('email', '')
            localStorage.setItem('id', '')

        }
    }
})

export const addUserThunkCreator = (email, pass) => {
    return async (dispatch) => {
        await userAPI.addUser(email, pass)
            .then(response => {
                if (response.data === 'Email is busy') {
                    dispatch(setError(response.data))
                } else {
                    dispatch(setUser(response.data))
                }
            })
    }
}

export const isUserThunkCreator = (email, pass) => {
    return async (dispatch) => {
        await userAPI.isUser(email, pass)
            .then(response => {
                if (response.data === 'Not found') {
                    dispatch(setError(response.data))
                } else {
                    dispatch(setUser(response.data))
                    dispatch(initUser())
                }
            })
    }
}

export default userSlice.reducer
export const {initUser, setUser, setError, logout} = userSlice.actions
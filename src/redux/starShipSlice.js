import {createSlice} from "@reduxjs/toolkit";
import {starShipAPI} from "../api/api";

const starShipSlice = createSlice({
    name: 'starShip',
    initialState: {
        starShips: [],
        starShipsRent: [],
        setStarShipRentsLocal: [] //{id: 1, starshipYears: 5}
    },
    reducers: {
      setStarShip(state, action) {
          state.starShips = action.payload
      },
      //for server
      setStarShipRents(state, action) {
          state.starShipsRent = action.payload
      },
      setStarShipRentsLocal(state, action) {
          state.setStarShipRentsLocal.push(action.payload)
      },
      delStarShipRentsLocal(state, action) {
          state.setStarShipRentsLocal.forEach((el, index) => {
              if (el.id === action.payload.id) {
                  state.setStarShipRentsLocal.splice(index, 1)
              }
          })
      }
    }
})

export const getStarShipsThunkCreator = () => {
    return async (dispatch) => {
        await starShipAPI.getStarShip()
            .then(response => {
                dispatch(setStarShip(response))
            })
    }
}

export const getStarshipRentThunkCreator = (startDate, endDate) => {

    return async (dispatch) => {
        await starShipAPI.getStarShipRent(startDate, endDate)
            .then(response => {
                dispatch(setStarShipRents(response))
            })
    }
}

export const setStarshipRentThunkCreator = (idUser, starShipId, starshipYears, startDate, endDate) => {
    return async (dispatch) => {
        await starShipAPI.setStarShipRent(1, starShipId.id, starshipYears, startDate, endDate)
            .then(response => {
                //alert('Звездолет арендован')
            })
    }
}

export default starShipSlice.reducer
export const {setStarShip, setStarShipRents, setStarShipRentsLocal, delStarShipRentsLocal} = starShipSlice.actions
import axios from 'axios'


const instanse = axios.create({
    baseURL : 'https://localhost:7219/api',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    withCredentials: true
})


export let starShipAPI = {
    getStarShip() {
        return instanse.get(`StarShips`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },
    getStarShipRent(startDate, endDate) {
        //debugger
        return instanse.get(`RentShips?startDate=${startDate}&endDate=${endDate}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },
    setStarShipRent(idUser, starShipId, starshipYears, startDate, endDate) {
        return instanse.post(`RentShips`, {
            StartTime: startDate,
            EndTime: endDate,
            UserId: idUser,
            StarShipId: starShipId
        })
    }
}


export let userAPI = {
    isUser(email, pass) {
        return instanse.post(`Users/auth`, {Email: email, Pass: pass})
    },
    addUser(email, pass) {
        return instanse.post(`Users/registr`, {Email: email, Pass: pass})
    }
}
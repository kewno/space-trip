import React, {useEffect, useState} from "react";
import Starship from "../components/UiKit/Starship/Starship";
import {useSelector} from "react-redux";

const WrapStarship = ({name, id, img, status, ...attr}) => {
    let useRent = useSelector(store => store.ship.setStarShipRentsLocal).find(el => el.id === id)

    useEffect(() => {

    }, [useRent])

    let [starshipYears, setStarshipYears] = useState(3);

    //for server
    //let useRent = useSelector(store => store.ship.setStarShipRentsLocal).find(el => el.id === id)

    //for server

    // let useRent
    // let time;
    // if (starShipsRent) {
    //
    //     starShipsRent.forEach(el => {
    //         if (el.starShipId === id) {
    //             let dateNow = new Date();
    //             let dateEnd = new Date(el.endTime)
    //             time = dateEnd - dateNow ? dateEnd - dateNow : null
    //             useRent = el
    //         }
    //     })
    // }


    return (
        <div className="wrap-starship">
            <Starship
                id={id}
                name={name}
                img={img}
                status={!useRent}
                starshipYears={starshipYears}
                setStarshipYears={setStarshipYears}/>
        </div>
    )
}

export default WrapStarship
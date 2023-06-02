import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPersonWalking, faUser } from '@fortawesome/free-solid-svg-icons'

const Liste_covoit = (props) => {

    const [isType, setType] = useState("cccc")

    const Type = () => {
        if (props.liste.choix === "cherche") { return (<FontAwesomeIcon className="round_icon" icon={faPersonWalking} />) }
        else { return (<FontAwesomeIcon className="round_icon" icon={faCar} />) }
        
            }
        

            return (
                <p> <Type /></p>
            )
}

export default Liste_covoit
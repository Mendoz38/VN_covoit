import React, { useState, useEffect } from "react";
import { RepByAnnonce } from '../api/reponse'

const Liste_reponses = (props) => {

    const [nbrReponse, setNbrReponse] = useState([])
 
    useEffect (() => {
        //console.log("props.liste.", props.liste.id)
        RepByAnnonce(props.liste.id)
        .then((result) => {
            //console.log("NombreReponse", result.NombreReponse.length)
            setNbrReponse(result.NombreReponse.length)
        })
        .catch(err => console.log(err))
    }, [])

    return (<span>{nbrReponse} </span>) 

}

export default Liste_reponses

import React, { useEffect, useState } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { loginUser } from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import { getAllCovoitById } from '../../api/covoit'
import Navigation from './../Navigation'
import Liste_reponses from './../Liste_reponses'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
    const user = useSelector(selectUser)
    const [salonCovoit, setSalonCovoit] = useState([])


    useEffect (() => {
        console.log("getAllCovoitById", user.infos.id)
        getAllCovoitById(user.infos.id)
            .then((result) => {
                console.log("getAllCovoitById", result.covoitsById)
  
                setSalonCovoit(result.covoitsById)
                //console.log("salonCovoit", salonCovoit)

            })
            .catch(err => console.log(err))
    }, [])
    

    return (
        <div className="containeur">
        <Navigation />
            <h1> {salonCovoit.length} covoiturage(s)</h1>
            <div className="deposer">
        </div>

            <section>
                {salonCovoit.map((liste) => {
                    return (
                        <div className={`liste_covoit ${liste.choix}`} key={liste.id}>
                            <div className="type">
                                <p><b>{liste.arrivee}</b></p>

                            </div>

                            <div className="detail">
                                <h2>{liste.choix} {liste.places} place(s) </h2>
                                <p>De : <b>{liste.depart}</b>, départ le <b>{liste.date_aller}</b>  à  <b>{liste.heure}</b> </p>

                                <p>Contrepartie : <b>{liste.contrepartie}</b></p>

                            </div>
                            <div className="repondre " >
                                <Link className="bouton" to={`/edit_covoit/${liste.id}`}> Modifier </Link>
                                <p></p>
                                <Link className="bouton" to={`/edit_covoit/${liste.id}`}> <Liste_reponses  liste={liste}  /> réponse(s)  </Link>
                                
                            </div>
                        </div>
                    )
                })}
            </section> 
        </div>
    )

}

export default Login
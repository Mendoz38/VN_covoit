import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import { getAllCovoitById } from '../../api/covoit'
import Navigation from './../Navigation'
import Liste_reponses from './../Liste_reponses'
import PopUp from './../includes/Popup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'

const Profil = (props) => {
    const user = useSelector(selectUser)
    const [salonCovoit, setSalonCovoit] = useState([])
    const [isPopUp, setPopUp] = useState(false)
    const [idDelete, setIdDelete] = useState("")
    const [message, setMessage] = useState("")


    useEffect(() => {
        console.log("getAllCovoitById", user.infos.id)
        getAllCovoitById(user.infos.id)
            .then((result) => {
                console.log("getAllCovoitById", result.covoitsById)
                setSalonCovoit(result.covoitsById)
                //console.log("salonCovoit", salonCovoit)

            })
            .catch(err => console.log(err))
    }, [])

    const onClicDelete = (id) => {
        setIdDelete(id)
        setPopUp(true)
        console.log("idDelete", id)
    }

    return (
        <div className="containeur">
            <Navigation />
            <h1> {salonCovoit.length} covoiturage(s)</h1>
            {message &&
                <div className="bouton valide">
                    <h2>{message}</h2>
                </div>
            }
            <PopUp
                isPopUp={isPopUp}
                id={idDelete}
                msg={`Vous êtes sur le point de supprimer`}
                onClickMessage={(e) => {
                    setMessage("Covoiturage supprimé !!")

                }}
                onClickClose={(e) => {
                    console.log("zzzz")
                    setPopUp(false)
                }}
            />

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
                                <Link className="bouton" to={`/Edit_covoit/${liste.id}`}> Modifier </Link>
                                <p></p>
                                <Link className="bouton" to={`/Detail/${liste.id}`}> <Liste_reponses liste={liste} /> réponse(s)  </Link>

                            </div>
                            <div className="trash" >
                                <button
                                    className="bouton supprimer"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onClicDelete(liste.id)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrash} /> {liste.id}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )

}

export default Profil
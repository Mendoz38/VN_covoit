import React, { useState, useEffect } from "react";
import moment from 'moment'
//import { Link, NavLink  } from 'react-router-dom'
import { Link } from "react-router-dom";
import { getAllCovoit } from '../api/covoit'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPersonWalking, faUser, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'
import Deposer from './Deposer'
// import Liste_covoit from "./Liste_covoit";

const Home = (props) => {
    const [allCovoit, setAllCovoit] = useState([])

    // récupère les paramétres de l'url dans le localstorage (ajouté dans le require-auth)
    const url_date = window.localStorage.getItem('url_date')
    const date = moment(url_date).format('DD mm yyyy');

    useEffect(() => {
        getAllCovoit()
            .then((res) => {
                setAllCovoit(res.covoits)
            })
            .catch(err => console.log(err))

    }, [])

    const Type = (props) => {
        if (props.liste.choix === "Recherche") { return (<FontAwesomeIcon className="icon_x4 round_icon" icon={faPersonWalking} />) }
        else { return (<FontAwesomeIcon className="icon_x4 round_icon" icon={faCar} />) }
    }

    const Genre = (props) => {
        if (props.liste.genre === "masc") { return (<FontAwesomeIcon className="icon_x2" icon={faPerson} />) }
        else if (props.liste.genre === "fem") { return (<FontAwesomeIcon className="icon_x2" icon={faPersonDress} />) }
        else { return (<FontAwesomeIcon className="round_icon" icon={faCar} />) }
    }

    const Message = (props) => {
        if (props.liste.message) { return (<p className="message" >{props.liste.message}</p>) }
        else { return (<p></p>) }
    }

    const DateCrea = (props) => {
        return (moment(props.liste.date_crea).format('DD-MM-yyyy'))
    }

    return (
        <div className="containeur">
            <h1> Liste des covoiturages ({allCovoit.length}) </h1>

            <section>
                {allCovoit.map((liste) => {
                    return (
                        <div className={`liste_covoit ${liste.choix}`} key={liste.id}>
                            <div className="type">
                                <Type key={liste.id} liste={liste} />
                                <p>Vers <b>{liste.arrivee}</b></p>

                            </div>

                            <div className="detail">
                                <h3><Genre liste={liste} /> {liste.prenom} {liste.nom} - {liste.age} ans</h3>
                                <h2>{liste.choix} {liste.places} place(s) </h2>
                                <p>De : <b>{liste.depart}</b>, départ le <b>{liste.date_aller}</b>  à  <b>{liste.heure}</b> </p>

                                <p>Contrepartie : <b>{liste.contrepartie}</b></p>
                                <Message liste={liste} />

                            </div>
                            <div className="repondre " >
                                <Link className="repondre bouton" to={`/covoit/${liste.id}`}> Prendre contact </Link>
                                <p>Publié le : <b><DateCrea liste={liste} /></b></p>
                            </div>
                        </div>
                    )

                })}
            </section>
        </div>

    )

}

export default Home

/*


*/
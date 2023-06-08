import React, { useState, useEffect } from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
import { CovoitById } from '../api/covoit'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPersonWalking, faUser, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'


const Home = (props) => {
    const [salonCovoit, setSalonCovoit] = useState([])


  // récupère les paramétres de l'url dans le localstorage (ajouté dans le require-auth)
  const url_salon = window.localStorage.getItem('url_salon')

    useEffect(() => {
    // récupère les paramétres de l'url dans le localstorage (ajouté dans le require-auth)
    const url_id_salon = window.localStorage.getItem('url_id_salon')
        console.log("CovoitById", url_id_salon)
        CovoitById(url_id_salon)
            .then((result) => {
                //console.log("CovoitById", result.covoitDetail)

                setSalonCovoit(result.covoitDetail)
                //console.log("salonCovoit", salonCovoit)

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
            <h1> Liste des covoiturages ({salonCovoit.length}) </h1>
            <div className="deposer">
        <Link className="bouton deposer" to="/Deposer">Déposer une annonce pour {url_salon} </Link>
        </div>

            <section>
                {salonCovoit.map((liste) => {
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
                                <Link className="bouton" to={`/reponse_covoit/${liste.choix}/${liste.arrivee}/${liste.id}`}> Prendre contact </Link>
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
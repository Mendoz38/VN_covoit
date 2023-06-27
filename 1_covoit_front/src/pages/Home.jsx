import React, { useState, useEffect } from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loadURL, selectSalon } from '../slices/salonSlice'
import { CovoitById } from '../api/covoit'
import Liste_reponses from './Liste_reponses'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPersonWalking, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    const dispatch = useDispatch()

    const salon = useSelector(selectSalon);
    const [salonCovoit, setSalonCovoit] = useState([])

    useEffect(() => {
        // pour récupérer les paramètres de l'URL
        const queryParams = new URLSearchParams(window.location.search)
        // récupère les paramétres de l'url
        const localStorage = {
            salon: queryParams.get("salon"),
            date: queryParams.get("date"),
            id_salon: queryParams.get("id_salon")
        }
        // on stocke dans le store redux
        dispatch(loadURL(localStorage))
        //console.log("localStorage", localStorage)

        // ajouter les paramètres d'URL dans le localstorage
        // Bretelles et ceinture pour pouvoir récuperer les infos dans redux et le localStorage
        // Ca sert dans les form de déposer si l'user rafraichit la page
        window.localStorage.setItem("url_salon", localStorage.salon);
        window.localStorage.setItem("url_date", localStorage.date);
        window.localStorage.setItem("url_id_salon", localStorage.id_salon);

        // on recherche tous les covoiturages pour ce salon
        
        // Pour la prod remettre cet appel de redux
        //CovoitById(salon.infos.id_salon)
        
        CovoitById(localStorage.id_salon)
            .then((result) => {
                // on stocke les covoits dans salonCovoit
                setSalonCovoit(result.covoitDetail)
                console.log("Covoiturages pour ", localStorage.salon)
            })
            .catch(err => console.log(err))
    }, [props])

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

            {!salon.infos.salon ?
                (
                    <div>
                    <h1> Tester le module</h1>
                    <h2> Selectionnez un salon parmi la liste</h2>
                    <p>&nbsp;</p>
                <a  className="button-form deposer " href="/?id_salon=995&salon=Barrik ô Mazet&date=2023-06-10">Barrik ô Mazet</a>
                <a  className="button-form deposer" href="/?id_salon=990&salon=A la rencontre des Vins Naturels&date=2023-005-13">A la rencontre des Vins Naturels</a>
                <a  className="button-form deposer" href="/?id_salon=998&salon=Rencontres Qui l'Eût Cru&date=2023-08-10">Rencontres Qui l'Eût Cru</a>
                </div>
                )
                :
                (
                    <div>
                        <h1> {salonCovoit.length} covoiturage(s) pour {salon.infos.salon}</h1>
                        <div className="deposer">
                            <Link className="button-form deposer" to="/Deposer"> Déposer une annonce </Link>
                        </div>

                        <section>
                            {salonCovoit.map((liste) => {
                                return (
                                    <div className={`liste_covoit ${liste.choix}`} key={liste.id}>
                                        <div className="type">
                                            <Type key={liste.id} liste={liste} />
                                            <p><b>{liste.arrivee}</b></p>
                                        </div>

                                        <div className="detail">
                                            <h3><Genre liste={liste} /> {liste.prenom} {liste.nom} - <span className="p14">{liste.age} ans </span> </h3>
                                            <h2>{liste.choix} {liste.places} place(s) </h2>
                                            <p>De : <b>{liste.depart}</b>, départ le <b>{liste.date_aller}</b>  à  <b>{liste.heure}</b> </p>
                                            <p>Contrepartie : <b>{liste.contrepartie}</b></p>
                                            <Message liste={liste} />
                                        </div>

                                        <div className="repondre " >
                                            <Link className="bouton" to={`/reponse_covoit/${liste.choix}/${liste.id}/${liste.arrivee}/${liste.id_salon}/${liste.contrepartie}`}> Prendre contact </Link>
                                            <p>Publié le : <b><DateCrea liste={liste} /></b></p>
                                            <i><Liste_reponses liste={liste} /> interaction(s)</i>
                                        </div>
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                )
            }
        </div>
    )
}

export default Home

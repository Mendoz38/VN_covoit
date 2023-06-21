import React, { useEffect, useState, useRef } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { loginUser } from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import { CovoitDetail, editCovoit } from '../../api/covoit'
import Navigation from '../Navigation'
import Liste_reponses from '../Liste_reponses'

import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPhone, faVenusMars, faHandHoldingHeart, faNetworkWired } from '@fortawesome/free-solid-svg-icons'

const Edit_covoit = (props) => {
    const user = useSelector(selectUser)

    const params = useParams();
    const [salonCovoit, setSalonCovoit] = useState([])

    const [error, setError] = useState(null);
    const [validate, setValidate] = useState(false);
    const [redirect, setRedirect] = useState(false)
    
    const id = useRef();
    const id_salon = useRef();
    const choix = useRef();
    const places = useRef();
    const depart = useRef();
    const arrivee = useRef();
    const date_aller = useRef();
    const heure = useRef();
    const telephone = useRef();
    const genre = useRef();
    const age = useRef();
    const contrepartie = useRef();
    const message = useRef();

    useEffect(() => {
        console.log("CovoitDetail", params.id)
        CovoitDetail(params.id)
            .then((result) => {
                //setDepart(result.depart)
                //setArrivee(result.arrivee)
                console.log("CovoitDetail", result.choix)
                console.log("arrivee", result.arrivee)

                setSalonCovoit(result)
                console.log("salonCovoit", result)
                console.log("salonCovoit 2", salonCovoit.message)

            })
            .catch(err => console.log(err))
    }, [])



    const onSubmitForm = (e) => {

        console.log("onSubmitForm")

        const newId = id.current.value;
        const newId_salon = id_salon.current.value;
        const newChoix = choix.current.value;
        const newPlaces = places.current.value;
        const newDepart = depart.current.value;
        const newArrivéé = arrivee.current.value;
        const newDate_aller = date_aller.current.value;
        const newHeure = heure.current.value;
        const newTelephone = telephone.current.value;
        const newGenre = genre.current.value;
        const newAge = age.current.value;
        const newContrepartie = contrepartie.current.value;
        const newMessage = message.current.value;

        const newData = {
            id: newId,
            id_membre: user.infos.id,
            id_salon: salonCovoit.id,
            choix: newChoix,
            places: newPlaces,
            depart: newDepart,
            arrivee: newArrivéé,
            date_aller: newDate_aller,
            heure: newHeure,
            nom: user.infos.nom,
            prenom: user.infos.prenom,
            telephone: newTelephone,
            email: user.infos.mail,
            genre: newGenre,
            age: newAge,
            contrepartie: newContrepartie,
            message: newMessage
        }
        console.log("newData : ", newData)

        setError(false);

        editCovoit(newData)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.msg)
                } else {
                    setValidate(true)
                    //on demande une redirection
                    setRedirect(true)
                }
            })
            .catch((error) => {
                setError(error)
            });


    }
    if(redirect){
        return <Navigate to="/Profil"/>
    }

    return (
        <div className="containeur">
            <Navigation />
            <h1> Modifier l'annonce</h1>
            <div className="deposer">
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitForm(editCovoit);
                }}
            >
                <div className="card">
                    <input
                        type="hidden"
                        name="id"
                        defaultValue={salonCovoit.id}
                        ref={id}
                    />

                    <input
                        type="hidden"
                        name="id_salon"
                        defaultValue={salonCovoit.id_salon}
                        ref={id_salon}
                    />

                    <div className="step-title">Trajet  </div>
                    <div className="flex-50">
                        <div className="cust-input-group">
                            <div className="cust-input-group-prepend">
                                <span className="cust-input-group-text" id="choix">Je</span>
                            </div>
                            <select
                                id="choix"
                                name="choix"
                                className="cust-form-control"
                                defaultValue={salonCovoit.choix}
                                ref={choix}
                            >
                                <option defaultValue="">Recherche / Propose</option>
                                <option defaultValue="Recherche" selected={salonCovoit.choix === "Recherche"}>Recherche</option>
                                <option defaultValue="Propose" selected={salonCovoit.choix === "Propose"}>Propose</option>
                            </select>
                        </div>

                        <div className="cust-input-group">
                            <div className="cust-input-group-prepend">
                                <span className="cust-input-group-text" id="places">Place(s)</span>
                            </div>
                            <select
                                id="places"
                                name="places"
                                className="cust-form-control"
                                defaultValue={salonCovoit.places}
                                ref={places}
                            >
                                <option defaultValue="">Nombre de places</option>
                                <option defaultValue="1" selected={salonCovoit.places === 1}>1</option>
                                <option defaultValue="2" selected={salonCovoit.places === 2}>2</option>
                                <option defaultValue="3" selected={salonCovoit.places === 3}>3</option>
                                <option defaultValue="4" selected={salonCovoit.places === 4}>4</option>
                                <option defaultValue="5" selected={salonCovoit.places === 5}>5</option>
                                <option defaultValue="6" selected={salonCovoit.places === 6}>6</option>
                                <option defaultValue="7" selected={salonCovoit.places === 7}>7</option>
                                <option defaultValue="8" selected={salonCovoit.places === 8}>8</option>
                            </select>
                        </div>
                    </div>

                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="depart">Départ de</span>
                        </div>
                        <input
                            type="text"
                            className="cust-form-control"
                            placeholder="Je pars de..."
                            aria-label="Username"
                            aria-describedby="depart"
                            name="depart"
                            defaultValue={salonCovoit.depart}
                            ref={depart}
                        />
                    </div>

                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="arrivee">Arrivée à</span>
                        </div>
                        <input
                            type="text"
                            className="cust-form-control"
                            aria-describedby="arrivee"
                            name="arrivee"
                            defaultValue={salonCovoit.arrivee}
                            ref={arrivee}
                        />
                    </div>

                    <div className="step-text">Date et Heure</div>

                    <div className="cust-input-group flex-50">
                        <div className="cust-input-group">
                            <input
                                type="date"
                                className="cust-form-control"
                                id="date_aller"
                                name="date_aller"
                                defaultValue={salonCovoit.date_aller}
                                ref={date_aller}
                            />
                        </div>

                        <div className="cust-input-group">
                            <input
                                type="time"
                                className="cust-form-control"
                                id="heure"
                                name="heure"
                                defaultValue={salonCovoit.heure}
                                ref={heure}
                            />
                        </div>
                    </div>

                    <div className="step-title">Coordonnées</div>

                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="nom">Nom</span>
                        </div>
                        <input
                            type="text"
                            className="cust-form-control"
                            name="nom"
                            placeholder="Votre nom"
                            defaultValue={salonCovoit.nom}
                        />
                    </div>
                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="prenom">Prenom</span>
                        </div>
                        <input
                            type="text"
                            className="cust-form-control"
                            name="prenom"
                            placeholder="Votre prénom"
                            defaultValue={salonCovoit.prenom}
                            required
                        />
                    </div>

                    <p><FontAwesomeIcon icon={faCircleInfo} /> Seul votre prénom apparaîtra</p>


                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="telephone">&nbsp;<FontAwesomeIcon icon={faPhone} /></span>
                        </div>
                        <input
                            type="text"
                            className="cust-form-control"
                            aria-label="Username"
                            aria-describedby="telephone"
                            name="telephone"
                            placeholder="06 XX XX XX XX"
                            defaultValue={salonCovoit.telephone}
                            ref={telephone}
                        />
                    </div>

                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="email">&nbsp;@</span>
                        </div>
                        <input
                            type="email"
                            readOnly
                            className="cust-form-control"
                            aria-label="Username"
                            aria-describedby="email"
                            name="email"
                            placeholder="vous@e-mail.com"
                            defaultValue={user.infos.mail}
                        />
                    </div>

                    <div className="flex-50">
                        <div className="cust-input-group">
                            <div className="cust-input-group-prepend">
                                <span className="cust-input-group-text" id="genre"> &nbsp;<FontAwesomeIcon icon={faVenusMars} /></span>
                            </div>
                            <select
                                id="genre"
                                name="genre"
                                className="cust-form-control"
                                defaultValue={salonCovoit.genre}
                                ref={genre}
                            >
                                <option value="na"  selected={salonCovoit.genre === "na"} >---</option>
                                <option value="masc" selected={salonCovoit.genre === "masc"} >Homme</option>
                                <option value="fem" selected={salonCovoit.genre === "fem"} >Femme</option>
                                <option value="other" selected={salonCovoit.genre === "other"} >Autre</option>
                            </select>
                        </div>

                        <div className="cust-input-group">
                            <div className="cust-input-group-prepend">
                                <span className="cust-input-group-text" id="age">Âge</span>
                            </div>
                            <select
                                id="age"
                                name="age"
                                className="cust-form-control"
                                defaultValue={salonCovoit.age}
                                ref={age}
                            >
                                <option value="">---</option>
                                <option value="-20" selected={salonCovoit.age === "-20"} >- de 2000 ans</option>
                                <option value="20-30" selected={salonCovoit.age === "20-30"} >20-30 ans</option>
                                <option value="30-40" selected={salonCovoit.age === "30-40"} >30-40 ans</option>
                                <option value="40-50" selected={salonCovoit.age === "40-50"} >40-50 ans</option>
                                <option value="50-60" selected={salonCovoit.age === "50-60"} >50-60 ans</option>
                                <option value="+60" selected={salonCovoit.age === "+60"} >60 ans et +</option>
                            </select>
                        </div>
                    </div>

                    <div className="step-title">Contrepartie</div>


                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="contrepartie">&nbsp;<FontAwesomeIcon icon={faHandHoldingHeart} /></span>
                        </div>
                        <select
                            id="contrepartie"
                            name="contrepartie"
                            className="cust-form-control"
                            defaultValue={salonCovoit.contrepartie}
                            ref={contrepartie}
                        >
                            <option defaultValue="Rien ! Ca me fait plaisir !" selected={salonCovoit.contrepartie === "Rien ! Ca me fait plaisir !"} >Rien ! Ca me fait plaisir !</option>
                            <option defaultValue="Prix libre" selected={salonCovoit.contrepartie === "Prix libre"} >Prix libre</option>
                            <option defaultValue="Partage des frais" selected={salonCovoit.contrepartie === "Partage des frais"} >Partage des frais</option>
                            <option defaultValue="Autre" selected={salonCovoit.contrepartie === "Autre"} >Autre</option>
                        </select>
                    </div>

                    <h3>Précisions supplémentaires </h3>
                    <div className="cust-input-group">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Complétez votre annonce par un petit message ..."
                            defaultValue={salonCovoit.message}
                            ref={message}
                        ></textarea>
                    </div>
                    <p>  <FontAwesomeIcon icon={faCircleInfo} /> <a href="https://www.vinsnaturels.fr" target="_blank">Vinsnaturels.fr   </a> met juste en relation les utilisateurs, il ne peut être tenu responsable </p>


                    <div className="navigation">
                        <input
                            className="button-form"
                            type="submit"
                            value="Modifier"
                        />

                    </div>
                </div>
            </form>
        </div>
    )

}

export default Edit_covoit
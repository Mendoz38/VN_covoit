import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPersonWalking, faCircleInfo, faCoffee, faPhone, faVenusMars } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";


import { repCovoit } from '../api/covoit'

const Reponse_covoit = (props) => {
    const user = useSelector(selectUser);
    const params = useParams();

    const [type, setType] = useState("")
//    const [places, setPlaces] = useState("")

    const Type = () => {
        if (props.liste.choix === "cherche") { return (<FontAwesomeIcon className="round_icon" icon={faPersonWalking} />) }
        else { return (<FontAwesomeIcon className="round_icon" icon={faCar} />) }

    }

    const url_id_salon = window.localStorage.getItem('url_id_salon')
    const url_salon = window.localStorage.getItem('url_salon')

    const [formData, setFormData] = useState({
        id_membre: user.infos.id,
        id_salon: url_id_salon,
        id_annonce: params.id,
        // mettre le type Recherche / Propose sélectionné
        choix: params.type,
        places: "",
        depart: "",
        arrivee: params.salon,
        date_aller: "",
        heure: "",
        nom: user.infos.nom,
        prenom: user.infos.prenom,
        telephone: "",
        email: user.infos.mail,
        genre: "",
        age: "",
        message: "",
    });
    console.log("formData : ", formData)


    useEffect(() => {
        // inverser Recherche / Propose
        if (params.type === "Propose") { setType("Recherche") }
        if (params.type === "Recherche") { setType("Propose") }

    }, [formData, type])


    const repondre = () => {
        repCovoit(formData)
            .then((res) => {
                if (res.status !== 200) {
                    console.log("Dans le then error if", res.error)


                    //setRedirect(true)

                } else {
                    console.log("token", res.token)
                    //setRedirect(true)
                }
            })
            .catch((err) => {
                console.log("Dans le catch : ", err.error)
            })

    }

    return (
        <section>
        <form>
            <p> <br /></p>
            <div className="card">
                <div className="step-title">Répondre à l'annonce pour</div>
                <div className="step-title">{params.salon}</div>

                <div className="flex-50">
                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="type">Je</span>
                        </div>
                        <input
                            type="text"
                            readOnly
                            diseable="true"
                            className="cust-form-control"
                            name="type"
                            value={type}
                        />
                    </div>

                    <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="places">Place(s)</span>
                        </div>
                        <select
                            id="places"
                            name="places"
                            className="cust-form-control"
                            value={formData.places}
                            onChange={(e) => {
                                setFormData({ ...formData, places: e.target.value })
                            }}
                        >
                            <option value="">Nombre de places</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>


                    </div>

                </div>

                <div className="cust-input-group">
                    <div className="cust-input-group-prepend">
                        <span className="cust-input-group-text" id="nom">Nom</span>
                    </div>
                    <input
                        type="text"
                        className="cust-form-control"
                        name="nom"
                        placeholder="Votre nom"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
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
                        value={formData.prenom}
                        required
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
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
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    />
                </div>


                <div className="cust-input-group">
                    <div className="cust-input-group-prepend">
                        <span className="cust-input-group-text" id="email">&nbsp;@</span>
                    </div>
                    <input
                        type="email"
                        diseable="true"
                        className="cust-form-control"
                        aria-label="Username"
                        aria-describedby="email"
                        name="email"
                        placeholder="vous@e-mail.com"
                        value={user.infos.mail}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
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
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    >
                        <option value="na">---</option>
                        <option value="masc">Homme</option>
                        <option value="fem">Femme</option>
                        <option value="other">Autre</option>
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
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    >
                        <option value="">---</option>
                        <option value="-20">- de 20 ans</option>
                        <option value="20-30">20-30 ans</option>
                        <option value="30-40">30-40 ans</option>
                        <option value="40-50">40-50 ans</option>
                        <option value="50-60">50-60 ans</option>
                        <option value="+60">60 ans et +</option>
                    </select>
                </div>
            </div>

            <div className="cust-input-group">
                        <div className="cust-input-group-prepend">
                            <span className="cust-input-group-text" id="type">Contrepartie demandé</span>
                        </div>
                        <input
                            type="text"
                            readOnly
                            diseable="true"
                            className="cust-form-control"
                            name="type"
                            value={params.contrepartie}
                        />
                    </div>


            <div className="cust-input-group">
                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Complétez votre annonce par un petit message ..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
            </div>
            <p>  <FontAwesomeIcon icon={faCircleInfo} /> <a href="https://www.vinsnaturels.fr" target="_blank">Vinsnaturels.fr   </a> met juste en relation les utilisateurs, il ne peut être tenu responsable </p>

            <button
                className="envoyer"
                onClick={(e) => {
                    e.preventDefault();
                    repondre()
                }}>
                Envoyer
            </button>

        </form>
    </section>
    )
}

export default Reponse_covoit
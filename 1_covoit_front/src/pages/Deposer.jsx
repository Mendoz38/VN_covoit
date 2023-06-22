import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { selectSalon } from '../slices/salonSlice'
import Navigation from './Navigation'

import './form/form.css';
import Trajet from "./form/Trajet";
import Coord from "./form/Coord";
import Infos from "./form/Infos";
import Envoyer from "./form/Envoyer";


const Deposer = (props) => {

  // récupère les paramétres de l'user dans le store (ajouté require-auth)
  const user = useSelector(selectUser);
  // récupère les paramétres de l'url dans le store (ajouté dans Home)
  const salon = useSelector(selectSalon);

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    id_membre: user.infos.id,
    id_salon: salon.infos.id_salon,
    choix: "",
    places: "",
    depart: "",
    arrivee: salon.infos.salon,
    date_aller: "",
    heure: "",
    nom:user.infos.nom,
    prenom: user.infos.prenom,
    telephone: "",
    email: user.infos.mail,
    genre: "",
    age: "",
    contrepartie: "",
    message: "",
  });

  const componentList = [
    <Trajet
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Coord
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Infos
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Envoyer
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  ];

  //console.log("formData :", formData)
  return (
    <section>
      <div className="container">
        <Navigation />
        <div className="progress-bar">
          <div className="step">
            <p>Trajet</p>
            <div className={"bullet " + (page > 0 ? 'active' : '')}>
              <span>1</span>
            </div>
            <div className={"check fas fa-check " + (page > 0 ? 'active' : '')}><FontAwesomeIcon icon={faCheck} /></div>
          </div>
          <div className="step">
            <p>Coordonnées</p>
            <div className={"bullet " + (page > 1 ? 'active' : '')}>
              <span>2</span>
            </div>
            <div className={"check fas fa-check " + (page > 1 ? 'active' : '')}><FontAwesomeIcon icon={faCheck} /></div>
          </div>
          <div className="step">
            <p>Informations</p>
            <div className={"bullet " + (page > 2 ? 'active' : '')}>
              <span>3</span>
            </div>
            <div className={"check fas fa-check " + (page > 2 ? 'active' : '')}><FontAwesomeIcon icon={faCheck} /></div>
          </div>
        </div>
      </div>

      <div>{componentList[page]}</div>

    </section>
  )
}

export default Deposer
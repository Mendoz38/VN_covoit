import { useState } from "react"
import logo from './img/covoit.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash, faUser, faPhone, faVenusMars } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
const Home =(props) => {

    const user = useSelector(selectUser);
  // récupère les paramétres de l'url dans le localstorage (ajouté dans le require-auth)
  const url_salon = window.localStorage.getItem('url_salon')

    
    return (
        <div>
        <div className="header">
            <Link to="/"><img src={logo} alt="covoit" className='logo' /></Link>
            <h1> Covoiturer avec Vinsnaturels.fr </h1>

            {user.isLogged ? (
                <h1> <Link to="/user/Logout"><FontAwesomeIcon icon={faUserSlash} /></Link></h1>
            ) : (
                <h1> <Link to="/user/Login"><FontAwesomeIcon icon={faUser} /></Link></h1>
            )}
        </div>
        <div className="deposer">
        <Link className="bouton deposer" to="/Deposer">Déposer une annonce pour {url_salon} </Link>
        </div>
        </div>


    )

}

export default Home
import React from 'react'

import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { Link } from "react-router-dom";

const Home = () => {

    const user = useSelector(selectUser);

    return (
        <div className="footer">
            {user.isLogged ? (
                <div>
                    <p> Bienvenue {user.infos.prenom} {user.infos.nom} -  <Link to="/Profil">Mes annonces</Link></p>
                </div>
            ) : (
                <p className="flex-50">
                    <Link to="/Login">Se connecter</Link>
                    <Link to="/Register">S'enregistrer</Link>
                </p>
            )
            }
        </div>
    )
}

export default Home
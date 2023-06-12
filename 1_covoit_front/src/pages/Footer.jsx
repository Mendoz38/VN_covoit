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
                    <p> Bienvenue {user.infos.prenom} {user.infos.nom} -  <Link to="/Deposer">Deposer</Link></p>
                </div>
            ) : (
                <p className="flex-50">
                    <Link to="/user/Login">Se connecter</Link>
                    <Link to="/user/Register">S'enregistrer</Link>
                </p>
            )
            }
        </div>
    )
}

export default Home
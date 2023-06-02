import React from 'react'

import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { Link } from "react-router-dom";

const Home = (props) => {

    const user = useSelector(selectUser);

    return (
        <div className="footer">
            {user.isLogged ? (
                <div>
                    <p> Bienvenue {user.infos.prenom} {user.infos.nom} -  <Link to="/Deposer">Deposer</Link></p>
                </div>
             ) : (
            <p className="flex-50"> 
                <a href="/user/Login" >Se connecter </a>
                <a href="/user/register" >S'enregistrer </a>
            </p>

            )

            }


        </div>

    )

}

export default Home
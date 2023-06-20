import { useState } from "react"
import logo from './img/covoit.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash, faUser } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
const Home = () => {

    const user = useSelector(selectUser);

    return (
        <div>
            <div className="header">
                <Link to="/?id_salon=995&salon=Barrik ô Mazet&date=2023-06-10"><img src={logo} alt="covoit" className='logo' /></Link>
                <h1> Covoiturer avec Vinsnaturels.fr </h1>

                {user.isLogged ? (
                    <h1> <Link to="/Logout"><FontAwesomeIcon icon={faUserSlash} /></Link></h1>
                ) : (
                    <h1> <Link to="/Login"><FontAwesomeIcon icon={faUser} /></Link></h1>
                )}
            </div>
        </div>
    )
}

export default Home
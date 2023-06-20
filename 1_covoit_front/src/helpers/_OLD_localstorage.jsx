import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectSalon, loadSalon} from '../slices/salonSlice'
import { checkToken } from '../api/user'

//HOC de controle des data et de la sécurité
const RequireAuth = (props) => {
  console.log("auth", props.auth)
  const dispatch = useDispatch();
  const Child = props.child;

  
  //je récup le params de la route demandée
  const params = useParams();


  // gestion des state
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {

    // pour récupérer les paramètres de l'URL
    const queryParams = new URLSearchParams(window.location.search)
    const salon = queryParams.get("salon")
    const date = queryParams.get("date")
    const id_salon = queryParams.get("id_salon")
    // ajouter les paramètres d'URL dans le localstorage
    window.localStorage.setItem("url_salon", salon);
    window.localStorage.setItem("url_date", date);
    window.localStorage.setItem("url_id_salon", id_salon);

    const localStorage = {
      salon : queryParams.get("salon"),
      date : date,
      id_salon : id_salon
    }
    console.log("localStorage", localStorage)


    //récupération du token dans le localStorage
    const token = window.localStorage.getItem("VN_token");
    console.log("VN_token ?", token);
    console.log("props.auth", props.auth)

    
  }, [])


  if (redirect) {
    return <Navigate to="/login" />;
  }
  //{...props} = transmet au composant enfant les props du parent (comme un relais)
  //params = j'ai crée une une props qui envoi le params de l'url (récupéré en haut par useParams) vers le composant enfant
  return <Child {...props} params={params} />;
}


export default RequireAuth;
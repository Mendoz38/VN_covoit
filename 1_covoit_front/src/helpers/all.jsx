import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../slices/userSlice";
import { checkToken } from '../api/user'



//HOC de controle des data et de la sécurité
const All = (props) => {
  const dispatch = useDispatch();
  const Child = props.child;

  //on prépare la fonctionnalité pour dispatcher notre action dans le store
  const user = useSelector(selectUser);
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
    console.log("id_salon",id_salon)
    
    // ajouter les paramètres d'URL dans le localstorage
    window.localStorage.setItem("url_salon", salon);
    window.localStorage.setItem("url_date", date);
    window.localStorage.setItem("url_id_salon", id_salon);

    //récupération du token dans le localStorage
    const token = window.localStorage.getItem("VN_token");
    //console.log("VN_token ?", token);

  }, [])

  return <Child {...props} params={params} />;
}


export default All;


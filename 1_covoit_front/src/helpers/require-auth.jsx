import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../slices/userSlice";



//HOC de controle des data et de la sécurité
const RequireAuth = (props) => {
  const dispatch = useDispatch();

  //on prépare la fonctionnalité pour dispatcher notre action dans le store
  const user = useSelector(selectUser);
  //je récup le params de la route demandée
  const params = useParams();

  const Child = props.child;

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

    //récupération du token dans le localStorage
    const token = window.localStorage.getItem("VN_token");
    //console.log("VN_token ?", token);
    //console.log("props.auth", props.auth)
    //si le token est null et que la route est protégée
    if (token === null && props.auth) {
      //on demande une redirection
      //console.log("Mettre setRedirect(true)")
      //setRedirect(true);
      //sinon
    } else {
      //console.log("si l'utilisateur est déconnecté dans le store de redux", token);
      //si l'utilisateur est déconnecté dans le store de redux
      if (user.isLogged === false) {
        //console.log("user.isLogged est en false", user.isLogged)
        //on va vérifier le token (ajax)
        axios.get(config.api_url + "/api/v1/checkToken", { headers: { "x-access-token": token } })
          .then((res) => {
            //console.log("RequireAuth useEffect", res);
            //si le status de la réponse n'est pas 200
            if (res.data.status !== 200) {
              //si la route est protégée
              if (props.auth) {
                //on demande la redirection
                window.localStorage.removeItem("VN_token");
                setRedirect(true);
              }
              //sinon (c'est 200)
            } else {
              //console.log("wwwwwwwwwwwwwwwwwww", res.data);
              //on récup les infos de l'utilisateur (objet) qu'on stock dans une variable user
              let user = res.data.user[0];
              //on rajoute le token à l'objet
              user.token = token;
              //on met à jour le store pour connecter l'utilisateur
              dispatch(setUser(user));
              //console.log("userrrrrrrr ", user);


            }
          })
          .catch((err) => {
            //console.log("error checkToken", err);
          });

      }
    }
  }, [])


  if (redirect) {
    return <Navigate to="/login" />;
  }
  //{...props} = transmet au composant enfant les props du parent (comme un relais)
  //params = j'ai crée une une props qui envoi le params de l'url (récupéré en haut par useParams) vers le composant enfant
  return <Child {...props} params={params} />;
}


export default RequireAuth;


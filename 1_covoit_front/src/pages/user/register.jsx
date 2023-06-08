import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { saveUser } from "../../api/user";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Register = (props) => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validate, setValidate] = useState(false);
  //    const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  // vérification de la concordance des 2 password
  useEffect(() => {
    setErrorPassword(null);
    if (
      password !== "" &&
      confirmPassword !== "" &&
      password !== confirmPassword
    ) {
      setErrorPassword("Les 2 mots de passe ne sont pas identique");
    }
  }, [password, confirmPassword])


  const onSubmitForm = () => {
    setError(false);

    if (
      prenom === "" ||
      nom === "" ||
      mail === "" ||
      password === "" ||
      confirmPassword === "" 
    ) {
      setError("Merci de remplir tous les champs");
    } else if (password === confirmPassword) {
      const data = {
        prenom: prenom,
        nom: nom,
        mail: mail,
        password: password,
      };
      console.log("data", data)
      saveUser(data)
        .then((response) => {
          if (response.status !== 200) {
            setError(response.msg);
          } else {
            setValidate(true);
          }
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      console.log("Erreur, echec enregistrement")
    }

  }


  


  return (
    <div>
      <h1>Bienvenue sur <span className="clair">Vinsnaturels</span>.fr</h1>

      <div className="log-container">
        {validate === false ?

          <div className="log-container">
            <h2>Créer un compte</h2>
            <form
              className="formulaires"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitForm();
              }}
            >
              <div className="cust-input-group">
                <div className="cust-input-group-prepend">
                  <span className="cust-input-group-text" id="prenom">Prénom</span>
                </div>
                <input
                  type="text"
                  className="cust-form-control"
                  name="prenom"
                  placeholder="Votre prénom"
                  onChange={(e) => {
                    setPrenom(e.currentTarget.value);
                  }}
                />
              </div>

              <div className="cust-input-group">
                <div className="cust-input-group-prepend">
                  <span className="cust-input-group-text" id="prenom">Nom</span>
                </div>
                <input
                  type="text"
                  className="cust-form-control"
                  name="nom"
                  placeholder="Votre nom"
                  onChange={(e) => {
                    setNom(e.currentTarget.value);
                  }}
                />
              </div>

              <div className="cust-input-group">
                <div className="cust-input-group-prepend">
                  <span className="cust-input-group-text" id="mail"> @</span>
                </div>
                <input
                  type="text"
                  className="cust-form-control"
                  name="mail"
                  placeholder="Votre mail"
                  onChange={(e) => {
                    setMail(e.currentTarget.value);
                  }}
                />
              </div>


              <div className="cust-input-group">
                <div className="cust-input-group-prepend">
                  <span className="cust-input-group-text" id="password">&nbsp;<FontAwesomeIcon icon={faLock} /> </span>
                </div>
                <input
                  type="password"
                  className="cust-form-control"
                  name="password"
                  placeholder="Votre mot de passe"
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                />
              </div>

              <div className="cust-input-group">
                <div className="cust-input-group-prepend">
                  <span className="cust-input-group-text" id="password">&nbsp;<FontAwesomeIcon icon={faLock} /> </span>
                </div>
                <input
                  className="cust-form-control"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmer le mot de passe"
                  onChange={(e) => {
                    setConfirmPassword(e.currentTarget.value);
                  }}
                />
              </div>



              {errorPassword !== null && <p className="errorMsg">{errorPassword}</p>}
              {error !== null && (<p className="errorMsg">{error}</p>)}

              <input
                className="button-form fond_clair"
                type="submit"
                value="Créer"
              />
            </form>
          </div>

          : <div>
            <h2>Un mail vous a été envoyé </h2>
            <p>Merci de valider votre compte pour vous connecter</p>
          </div>
        }

      </div>
    </div>
  );

}

export default Register
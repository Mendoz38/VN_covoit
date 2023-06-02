import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import RegisterImg from "../../assets/img/Register.png";
import { saveUser } from "../../api/user";

const Register = (props) => {
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [profession, setProfession] = useState("");
    
    const [validate, setValidate] = useState(false);
//    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);
    const [errorPwd, setErrorPwd] = useState(null);
    
    // vérification de la concordance des 2 pwd
    useEffect(()=>{
      setErrorPwd(null);
      if (
        pwd !== "" &&
        confirmPwd !== "" &&
        pwd !== confirmPwd
      ) {
        setErrorPwd("Les 2 mots de passe ne sont pas identique");
      }
    }, [pwd, confirmPwd])
    
    
    const onSubmitForm = () => {
        setError(false);
        
        if (
            prenom === "" ||
            nom === "" ||
            mail === "" ||
            pwd === "" ||
            confirmPwd === ""  ||
            profession === ""  ||
            entreprise === "" 
        ) {
            setError("Merci de remplir tous les champs");
        } else if (pwd === confirmPwd) {
            const data = {
                prenom: prenom,
                nom: nom,
                mail: mail,
                pwd: pwd,
                profession: profession,
                entreprise: entreprise,
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
        }else{
            console.log("Erreur, echec enregistrement")
        }
      
    }
    
      // pour afficher un input supplémentaire pour les pros
      const [proInput, setProInput] = useState(false);
      const [proInputName, setProInputName] = useState("");
      const [proInputPlaceholder, setProInputPlaceholder] = useState("");
      useEffect(()=>{
        setEntreprise("")
        if (profession == "vigneron") {
          setProInput(true)
          setProInputPlaceholder("Votre domaine")

        }
        else if (profession == "caviste" || profession == "restaurant" || profession == "revendeur" ) {
          setProInput(true)
          setProInputPlaceholder("Nom de votre commerce")
        }
        else if (profession == "amateur") {
          setProInput(false)
          setEntreprise("amateur")
        }
      }, [profession])
      

    
    return (
    <div>
      <h1>Bienvenue sur <span className="clair">Vinsnaturels</span>.fr</h1>
      
      <div className="log-container">
        {validate === false ?

          <div className="log-container-form">
            <h2>Créer un compte</h2>
            <form
              className="formulaires"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitForm();
              }}
            >
              <label>Prénom</label>
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                onChange={(e) => {
                  setPrenom(e.currentTarget.value);
                }}
              />
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                onChange={(e) => {
                  setNom(e.currentTarget.value);
                }}
              />
              <label>Je suis :</label>
              <select className="" 
                name="profession" 
                onChange={(e) => {
                  setProfession(e.currentTarget.value);
                }}
              >
                <option value="1" disabled="" selected=""></option>
                <option value="vigneron"> Un vigneron </option>
                <option value="caviste"> Un caviste </option>
                <option value="restaurant"> Un restaurateur </option>
                <option value="revendeur"> Un revendeur </option>
                <option value="amateur"> Juste un amateur de vin naturel ! </option>
              </select>
              
              {proInput ? 
              <input
                className="inputPro"
                type="text"
                name="entreprise"
                placeholder={proInputPlaceholder}
                onChange={(e) => {
                  setEntreprise(e.currentTarget.value);
                }}
                 /> : null}



              <label>Mail</label>
              <input
                type="text"
                name="mail"
                placeholder="Votre mail"
                onChange={(e) => {
                  setMail(e.currentTarget.value);
                }}
              />
              <label>Pwd</label>
              <input
                type="pwd"
                name="pwd"
                placeholder="Votre mot de passe"
                onChange={(e) => {
                  setPwd(e.currentTarget.value);
                }}
              />
              <input
                type="pwd"
                name="confirmPwd"
                placeholder="Confirmer le mot de passe"
                onChange={(e) => {
                  setConfirmPwd(e.currentTarget.value);
                }}
              />
 


              {errorPwd !== null && <p className="errorMsg">{errorPwd}</p>}
              {error !== null && ( <p className="errorMsg">{error}</p> ) }

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
import React, { useEffect, useState } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { loginUser } from "../../api/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
import Navigation from './../Navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);


  const [reponseMail, setReponseMail] = useState("");
  const params = useParams()

  useEffect(() => {
    /* pour afficher les reponses de mail dans le titre  */
    if (params.validate) {
      setReponseMail("Votre mail a été validé")
    }
    /* pour afficher les reponses de mail dans le titre  */
  }, [])

  useEffect(() => {
    if (email !== "" && pwd !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, pwd]);

  const onSubmitForm = () => {
    let data = {
      email: email,
      pwd: pwd,
    };

    loginUser(data)
      .then((res) => {
        if (res.status === 200) {
          window.localStorage.setItem("VN_token", res.token);
          let user = res.user
          user.token = res.token
          dispatch(setUser(user))
          setRedirect(true);
        } else {
          setError(res.msg);
        }
      })
      .catch((err) => {
        setError(err);
      });

  }

  return (
    <main>
    <Navigation />
      {redirect && <Navigate to="/" />}
      {error !== null ? (
        <h2 className="errorMsg">{error}</h2>
      ) : (
        <h2>Se connecter</h2>
      )}


      <p>  {params.id} </p>
      <p>  {reponseMail} </p>
      <div className="log-container">
        
        <form
          className="formulaires"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitForm();
          }}
        >


          <div className="cust-input-group">
            <div className="cust-input-group-prepend">
              <span className="cust-input-group-text" id="email">&nbsp;@</span>
            </div>
            <input
              type="email"
              className="cust-form-control"
              name="email"
              placeholder="vous@e-mail.com"
              value={email}
              onChange={(e) => setMail(e.currentTarget.value)}
            />
          </div>

          <div className="cust-input-group">
            <div className="cust-input-group-prepend">
              <span className="cust-input-group-text" id="pwd">&nbsp;<FontAwesomeIcon icon={faLock} /> </span>
            </div>
            <input
              type="password"
              name="pwd"
              className="cust-form-control"
              placeholder="Votre mot de passe"
              value={pwd}
              onChange={(e) => setPwd(e.currentTarget.value)}
            />
          </div>


          <input
            className="button-form"
            type="submit"
            value="Se connecter"
            disabled={disabled}
          />
        </form>

        <div>
          <Link to="/Register"><span>Pas encore de compte ?</span></Link>
        </div>
      </div>
    </main>
  );

}

export default Login;
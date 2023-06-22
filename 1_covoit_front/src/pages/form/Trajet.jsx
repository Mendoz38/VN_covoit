import { useState, useEffect } from 'react';
import moment from 'moment'
import { useSelector } from "react-redux";
import { selectSalon } from '../../slices/salonSlice'

const Trajet = ({ page, setPage, formData, setFormData }) => {

  const [url_salon, setUrl_salon] = useState("")
  const [url_date, setUrl_date] = useState("")

  // récupère les paramétres de l'url dans le store (ajouté dans Home)
  const salon = useSelector(selectSalon);

  useEffect(() => {
    // vérifie que le salon soit toujours dans le store (problème si l'user refresh le navigateur)
    if (salon.infos.salon !== undefined) {
      console.log("Toujours dans le store !!", salon.infos.salon)
      setUrl_salon(salon.infos.salon)
      setUrl_date(salon.infos.date)

    } // sinon on va le chercher dans le local
    else {
      console.log("Plus dans le store, on le récupère dans le localstorage", window.localStorage.getItem('url_salon'))
      setUrl_salon(window.localStorage.getItem('url_salon'))
      setUrl_date(window.localStorage.getItem('url_date'))
    }

  }, [])

  // on enlève 1 jour à la date du salon pour ne proposer que cette date dans le datepicker
  const date_deb = moment(salon.infos.date).subtract(1, "days").format('yyyy-MM-DD');
  const date_fin = moment(salon.infos.date).add(2, "days").format('yyyy-MM-DD');

  const [active, setActive] = useState("")

  useEffect(() => {

    //vérifie que tous les champs obligatoire soient remplis
    /*--------------------A FAIRE -------------------------------
    if (!choix || !places || !depart || !date_aller || !heure) { 
        setActive("ok");
        setMessage("Merci de remplir tous les champs", choix);
      }
    else { 
      setActive("");
      setMessage("");
    }
    --------------------A FAIRE -------------------------------
    */

  }, [formData])

  return (
    <div className="card">
      <div className="step-title">Trajet  </div>
      <div className="flex-50">
        <div className="cust-input-group">
          <div className="cust-input-group-prepend">
            <span className="cust-input-group-text" id="choix">Je</span>
          </div>
          <select
            id="choix"
            name="choix"
            className="cust-form-control"
            value={formData.choix}
            onChange={(e) => {
              setFormData({ ...formData, choix: e.target.value })
            }}
          >
            <option value="">Recherche / Propose</option>
            <option value="Recherche">Recherche</option>
            <option value="Propose">Propose</option>
          </select>
        </div>

        <div className="cust-input-group">
          <div className="cust-input-group-prepend">
            <span className="cust-input-group-text" id="places">Place(s)</span>
          </div>
          <select
            id="places"
            name="places"
            className="cust-form-control"
            value={formData.places}
            onChange={(e) => {
              setFormData({ ...formData, places: e.target.value })
            }}
          >
            <option value="">Nombre de places</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>

      <div className="cust-input-group">
        <div className="cust-input-group-prepend">
          <span className="cust-input-group-text" id="depart">Départ de</span>
        </div>
        <input
          type="text"
          className="cust-form-control"
          placeholder="Je pars de..."
          aria-label="Username"
          aria-describedby="depart"
          name="depart"
          value={formData.depart}
          onChange={(e) => {
            setFormData({ ...formData, depart: e.target.value })
          }}
        />
      </div>

      <div className="cust-input-group">
        <div className="cust-input-group-prepend">
          <span className="cust-input-group-text" id="arrivee">Arrivée à</span>
        </div>
        <input
          type="text"
          className="cust-form-control"
          aria-describedby="arrivee"
          name="arrivee"
          defaultValue={url_salon}
          onChange={(e) => {
            setFormData({ ...formData, arrivee: e.target.defaultValue })
          }}
        />
      </div>

      <div className="step-text">Date et Heure</div>

      <div className="cust-input-group flex-50">
        <div className="cust-input-group">
          <input
            type="date"
            className="cust-form-control"
            id="date_aller"
            name="date_aller"
            getdate={date_deb}
            min={date_deb}
            max={date_fin}
            value={formData.date_aller}
            onChange={(e) => {
              setFormData({ ...formData, date_aller: e.target.value })
            }}
          />
        </div>

        <div className="cust-input-group">
          <input
            type="time"
            className="cust-form-control"
            id="heure"
            name="heure"
            min="09:00" max="18:00"
            value={formData.heure}
            onChange={(e) => {
              setFormData({ ...formData, heure: e.target.value })
            }}
          />

        </div>
      </div>

      <button
        disabled={active}
        onClick={() => {
          setPage(page + 1);
        }}>
        Suivant
      </button>
    </div>
  );
};

export default Trajet;

/*  pour afficher le message d'erreur après button
      <p className="errorMsg"><b>{message}</b></p>

*/
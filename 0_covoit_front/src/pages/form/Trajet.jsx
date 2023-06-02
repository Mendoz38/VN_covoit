import { useState , useEffect} from 'react';
import moment from 'moment'

const Trajet = ({ page, setPage, formData, setFormData }) => {

  const [choix, setChoix] = useState("")
  const [places, setPlaces] = useState("")
  const [depart, setDepart] = useState("")
  const [arrivee, setArrivee] = useState("")
  const [date_aller, setDate_aller] = useState("")
  const [heure, setHeure] = useState(false)
  const [next, setNext] = useState()
  
  // récupère les paramétres de l'url dans le localstorage (ajouté dans le require-auth)
  const url_id_salon = window.localStorage.getItem('url_id_salon')
  const url_salon = window.localStorage.getItem('url_salon')
  const url_date = window.localStorage.getItem('url_date')

  // on enlève 1 jour à la date du salon pour ne proposer que cette date dans le datepicker
  const date_deb = moment(url_date).subtract(1, "days").format('yyyy-MM-DD');
  const date_fin = moment(url_date).add(2, "days").format('yyyy-MM-DD');
  

  useEffect(()=>{
    if (!choix || !places || !depart || !arrivee || !date_aller || !heure) { 
        // console.log("Pas ok") 
      }
    else { setNext("OK") }
  
},[])

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
              setChoix(e.target.value)
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
              setPlaces(e.target.value)
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
            setDepart(e.target.value)
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
            setArrivee(e.target.value)
          }}

        />
      </div>

      <input
          type="hidden"
          disabled
          className="cust-form-control"
          aria-describedby="id_salon"
          name="id_salon"
          defaultValue={url_id_salon}
          onChange={(e) => {
            setFormData({ ...formData, id_salon: e.target.defaultValue })
            setArrivee(e.target.value)
          }}

        />


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
              setDate_aller(e.target.value)
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
              setHeure(e.target.value)
            }}
          />

        </div>
      </div>




      <button
        onClick={() => {
          setPage(page + 1);
        }}>
        Suivant
      </button>
    </div>
  );
};

export default Trajet;
import { useState } from 'react';

const Trajet = ({ page, setPage, formData, setFormData }) => {

  const [choix, setChoix] = useState("")
  const [places, setPlaces] = useState("")
  const [depart, seDepart] = useState("")
  const [arrivee, setArrivee] = useState("")
  const [jour, setJour] = useState("")
  const [heure, setHeure] = useState(false)
  const [next, setNext] = useState()


  const place = [
    { value: '', nombre: '--Nombre de places--' },
    { value: '1', nombre: '1' },
    { value: '2', nombre: '2' },
    { value: '3', nombre: '3' },
    { value: '4', nombre: '4' },
    { value: '5', nombre: '5' },
    { value: '6', nombre: '6' },
    { value: '7', nombre: '7' },
    { value: '8', nombre: '8' },
  ];

  const [selected, setSelected] = useState(place[0].value);
  const handleChange = event => {
    setSelected(event.target.value);
  };

  if(!choix || !places ) {console.log("Pas ok")}
  else { console.log("OK !!!!!!!!!!!!!!!!!!")}

  console.log("Next ? :", next)
  console.log("choix ? :", choix)
  console.log("places ? :", places)
  return (
    <div className="card">
      <div className="step-title">Trajet</div>

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
            }
            }
          >
            <option value="">Recherche / Propose</option>
            <option value="cherche">Recherche</option>
            <option value="propose">Propose</option>
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
            value={formData.place}
            onChange={(e) =>
              setFormData({ ...formData, place: e.target.value })
            }
          >
            {place.map(places => (
              <option key={places.value} value={places.value}>
                {places.nombre}
              </option>
            ))}
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
          onChange={(e) =>
            setFormData({ ...formData, depart: e.target.value })
          }
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
          defaultValue="Salon"
          onChange={(e) =>
            setFormData({ ...formData, arrivee: e.target.defaultValue })
          }

        />
      </div>

      <div className="step-text">Date et Heure</div>

      <div className="cust-input-group flex-50">
        <div className="cust-input-group">
          <input
            type="date"
            className="cust-form-control"
            id="jour"
            name="jour"
            min="2022-07-20"
            max="2022-07-25"
            value={formData.jour}
            onChange={(e) =>
              setFormData({ ...formData, jour: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, heure: e.target.value })
            }
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
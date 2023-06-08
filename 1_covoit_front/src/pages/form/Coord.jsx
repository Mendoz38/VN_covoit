import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCoffee, faPhone, faVenusMars } from '@fortawesome/free-solid-svg-icons'


const Coord = ({ page, setPage, formData, setFormData }) => {


  const [selected, setSelected] = useState();



  return (
    <div className="card">
      <div className="step-title">Coordonnées</div>

      <div className="cust-input-group">
        <div className="cust-input-group-prepend">
          <span className="cust-input-group-text" id="nom">Nom</span>
        </div>
        <input 
          type="text" 
          className="cust-form-control" 
          name="nom" 
          placeholder="Votre nom" 
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value }) }
        />
      </div>
      <div className="cust-input-group">
      <div className="cust-input-group-prepend">
          <span className="cust-input-group-text" id="prenom">Prenom</span>
        </div>
        <input 
          type="text" 
          className="cust-form-control" 
          name="prenom" 
          placeholder="Votre prénom" 
          value={formData.prenom}
          required
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value }) } 
        />
      </div>

      <p><FontAwesomeIcon icon={faCircleInfo} /> Seul votre prénom apparaîtra</p>


      <div className="cust-input-group">
        <div className="cust-input-group-prepend">
          <span className="cust-input-group-text" id="telephone">&nbsp;<FontAwesomeIcon icon={faPhone} /></span>
        </div>
        <input 
          type="text" 
          className="cust-form-control" 
          aria-label="Username" 
          aria-describedby="telephone" 
          name="telephone" 
          placeholder="06 XX XX XX XX"  
          value={formData.telephone}
          onChange={(e) => setFormData({ ...formData, telephone: e.target.value }) }
        />
      </div>


      <div className="cust-input-group">
        <div className="cust-input-group-prepend">
          <span className="cust-input-group-text" id="email">&nbsp;@</span>
        </div>
        <input
          type="email"
          className="cust-form-control"
          aria-label="Username"
          aria-describedby="email"
          name="email"
          placeholder="vous@e-mail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value }) }
        />
      </div>





      <div className="flex-50">
        <div className="cust-input-group">
          <div className="cust-input-group-prepend">
            <span className="cust-input-group-text" id="genre"> &nbsp;<FontAwesomeIcon icon={faVenusMars} /></span>
          </div>
          <select 
            id="genre" 
            name="genre" 
            className="cust-form-control" 
            value={formData.genre}
            onChange={(e) => setFormData({ ...formData, genre: e.target.value }) }
          >
            <option value="na">---</option>
            <option value="masc">Homme</option>
            <option value="fem">Femme</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div className="cust-input-group">
          <div className="cust-input-group-prepend">
            <span className="cust-input-group-text" id="age">Âge</span>
          </div>
          <select 
            id="age" 
            name="age" 
            className="cust-form-control" 
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value }) }
          >
            <option value="">---</option>
            <option value="-20">- de 20 ans</option>
            <option value="20-30">20-30 ans</option>
            <option value="30-40">30-40 ans</option>
            <option value="40-50">40-50 ans</option>
            <option value="50-60">50-60 ans</option>
            <option value="+60">60 ans et +</option>
          </select>
        </div>
      </div>



      <div className="navigation">
        <button
          onClick={() => {
            setPage(page - 1);
          }}>
          Précédent
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Coord
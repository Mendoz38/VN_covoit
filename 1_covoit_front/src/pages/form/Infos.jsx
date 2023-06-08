import { useState , useEffect} from 'react';
import {addCovoit} from '../../api/covoit'
import {Navigate, Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCoffee, faHandHoldingHeart, faPhone, faVenusMars } from '@fortawesome/free-solid-svg-icons'

const Infos = ({ page, setPage, formData, setFormData }) => {

  const [redirect, setRedirect] = useState(false)

  const envoyer = () =>{

    
    addCovoit(formData)
    .then((res)=>{
        if(res.status !== 200){
            console.log("Dans le then error if", res.error)


        setRedirect(true)

        }else {
            console.log("token", res.token)
            setRedirect(true)
        }
    })
    .catch((err)=>{
        console.log("Dans le catch : ",err.error)
    })
    
}
if(redirect){
  setPage(page + 1);
}

        console.log("redirect", redirect)


  return (
    <div className="card">
      <div className="step-title">Contrepartie</div>


      <div className="cust-input-group">
        <div className="cust-input-group-prepend">
          <span className="cust-input-group-text" id="contrepartie">&nbsp;<FontAwesomeIcon icon={faHandHoldingHeart} /></span>
        </div>
        <select 
          id="contrepartie" 
          name="contrepartie" 
          className="cust-form-control" 
          value={formData.contrepartie}
          onChange={(e) => setFormData({ ...formData, contrepartie: e.target.value }) }
          >
          <option value="Rien ! Ca me fait plaisir !">Rien ! Ca me fait plaisir !</option>
          <option value="Prix libre">Prix libre</option>
          <option value="Partage des frais">Partage des frais</option>
          <option value="Autre">Autre</option>
        </select>
      </div>


      <h3>Précisions supplémentaires </h3>
      <div className="cust-input-group">
        <textarea 
          id="message" 
          name="message" 
          required
          placeholder="Complétez votre annonce par un petit message ..." 
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value }) }
          ></textarea>
      </div>
      <p>  <FontAwesomeIcon icon={faCircleInfo} /> <a href="https://www.vinsnaturels.fr" target="_blank">Vinsnaturels.fr   </a> met juste en relation les utilisateurs, il ne peut être tenu responsable </p>



      <div className="navigation">
        <button
          onClick={() => {
            setPage(page - 1);
          }}>
          Précédent
        </button>
        <button
          className="envoyer"
          onClick={() => {
            envoyer()
          }}>
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Infos;
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCoffee, faHandHoldingHeart, faPhone, faVenusMars } from '@fortawesome/free-solid-svg-icons'


const Envoyer = ({ page, setPage, formData, setFormData }) => {
  return (
    <div className="card">
      <div className="step-title">Envoyé !!</div>
      <div className="navigation">
        <Link className="deposer" to="/">
          <button>
            Voir les <br />
            covoiturages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Envoyer;
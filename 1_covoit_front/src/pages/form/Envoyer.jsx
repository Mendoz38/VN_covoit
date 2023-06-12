import { Link } from "react-router-dom";


const Envoyer = ({ page, setPage, formData, setFormData }) => {
  return (
    <div className="card">
      <div className="step-title">Covoiturage envoyé !!</div>
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
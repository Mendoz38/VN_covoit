import {  useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faChevronLeft} /> RETOUR</button>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


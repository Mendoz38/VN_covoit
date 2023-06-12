import React from 'react'

import RequireAuth from "./helpers/require-auth";

import './pages/styles.css';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Reponse_covoit from './pages/Reponse_covoit'
import Liste_reponses from './pages/Liste_reponses'
import Deposer from './pages/Deposer'
import Login from './pages/user/Login'
import Logout from './pages/user/Logout'
import Register from './pages/user/Register'

import { Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router";

function App() {
  return (
    <div className="covoit">
      <Header />
      <Routes>
        <Route exact path="/" element={<RequireAuth child={Home} auth={true} />} />
        <Route exact path="/Deposer" element={<RequireAuth child={Deposer} auth={true} />} />
        <Route exact path="/Reponse_covoit/:type/:id/:salon/:id_salon/:contrepartie" element={<RequireAuth child={Reponse_covoit} auth={true} />} />
        <Route exact path="/Liste_reponses" element={<RequireAuth child={Liste_reponses} auth={true} />} />
        <Route exact path="/user/Logout" element={<RequireAuth child={Logout} auth={true} />} />
        <Route exact path="/user/Login" element={<Login />} />
        <Route exact path="/user/Register" element={<Register />} />



        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

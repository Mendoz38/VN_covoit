import React from 'react'

import RequireAuth from "./helpers/require-auth";

import './pages/styles.css';
import Navigation from './pages/Navigation'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import reponse_covoit from './pages/reponse_covoit'
import Deposer from './pages/Deposer'
import Login from './pages/user/Login'
import Logout from './pages/user/Logout'
import Register from './pages/user/Register'

import {Routes, Route} from 'react-router-dom'
import { Navigate } from "react-router";

function App() {
  return (
    <div className="covoit">
      <Header />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<RequireAuth child={Home} auth={true} />} />
        <Route exact path="/Deposer" element={<RequireAuth child={Deposer} auth={true} />} />
        <Route exact path="/reponse_covoit/:type/:salon/:id" element={<RequireAuth child={reponse_covoit} auth={true} />} />
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

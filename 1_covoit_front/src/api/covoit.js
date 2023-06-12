import axios from "axios";
import { config } from "../config";

// Ajout d'un covoiturage - OK
export function addCovoit(user) {
    console.log("addCovoit", user)
    return axios.post(config.api_url+'/zzz/covoit/add', user)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

//répondre à un covoiturage - OK
export function repCovoit(data) {
    console.log("repCovoit", data)
    return axios.post(config.api_url+'/zzz/reponse/add', data)
    .then((res)=>{
        console.log("then res.data", res.data)
        return res.data
    })
    .catch((err)=>{
        console.log("XXXXXX catch err", err)
        return err
    })
}

// afficher tous les covoiturage - OK
export function getAllCovoit(data) {
    //console.log("getAllCovoit", data)
    return axios.get(config.api_url+'/zzz/covoit/all', data)
    .then((res)=>{
        //console.log("res.data", res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

// tous les covoit par salon - OK
export function CovoitById(id_salon) {
    console.log("zzz/covoit/one/:id_salon", id_salon)
    return axios.get(`${config.api_url}/zzz/covoit/one/${id_salon}`, id_salon)
    .then((res)=>{
        console.log("res.data dans api/covoit.js", res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

// afficher les réponses à une annonce
export function RepByCovoit(id_annonce) {
    console.log("RepByCovoit", id_annonce)
    return axios.get(`${config.api_url}/zzz/rep/one/${id_annonce}`, id_annonce)
    .then((res)=>{
        console.log("res.data dans api/covoit.js", res.data)
        return res.data

    })
    .catch ((err)=>{
        return err

    })

}




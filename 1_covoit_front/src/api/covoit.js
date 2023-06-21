import axios from "axios";
import { config } from "../config";
const token = window.localStorage.getItem("VN_token");

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

// afficher tous les covoiturage par utilisateur- OK
export function getAllCovoitById(id_membre) {
    console.log("getAllCovoitById", id_membre)
    return axios.get(config.api_url+`/zzz/covoit/user/${id_membre}`, id_membre)
    .then((res)=>{
        console.log("res.data", res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

// tous les covoit par salon - OK
export function CovoitById(id_salon) {
    //console.log("zzz/covoit/one/:id_salon", id_salon)
    return axios.get(`${config.api_url}/zzz/covoit/one/${id_salon}`, id_salon)
    .then((res)=>{
        //console.log("res.data dans api/covoit.js", res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

// 1 covoit détail
export function CovoitDetail(id) {
    //console.log("zzz/covoit/detail/:id", id)
    return axios.get(`${config.api_url}/zzz/covoit/detail/${id}`, id)
    .then((res)=>{
        console.log("res.data dans api/covoit.js", res.data.covoitDetail[0])
        return res.data.covoitDetail[0]
    })
    .catch((err)=>{
        return err
    })
}

// modification du covoit
export function editCovoit(newData) {
    console.log("zzz/covoit/update/:id", newData)
    return axios.put(`${config.api_url}/zzz/covoit/update/${newData.id}`, newData, {headers: { "x-access-token": token }})
    .then((res)=>{
        return res.data
    })
    .catch ((err)=>{
        return err
    })
}

// effacer un covoiturage
export function DeleteOneCovoit(id) {
    console.log("onClickDelete dans covoit.js", id)
    console.log("token dans covoit.js", token)
    return axios.delete(`${config.api_url}/zzz/covoit/delete/${id}`, {headers: { "x-access-token": token }})
    .then((res)=>{
        console.log("res.data dans api/covoit.js", res.data)
        return res.data

    })
    .catch ((err)=>{
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



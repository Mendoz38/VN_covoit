import axios from "axios";
import { config } from "../config";




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

// Réponses par annonce
export function RepByAnnonce(id_annonce) {
    //console.log("RepByCovoit", id_annonce)
    return axios.get(`${config.api_url}/zzz/reponse/one/${id_annonce}`, id_annonce)
    .then((res)=>{
        //console.log("res.data dans api/reponse.js", res.data)
        return res.data
    })
    .catch((err)=>{
        return err
    })
}
 
// afficher les réponses à une annonce
export function xxxxxRepByCovoit(id_annonce) {
    return axios.get(`${config.api_url}/zzz/rep/one/${id_annonce}`, id_annonce)
    .then((res)=>{
        console.log("res.data dans api/covoit.js", res.data)
        return res.data

    })
    .catch ((err)=>{
        return err

    })

}



 
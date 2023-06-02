import axios from "axios";
import { config } from "../config";

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

export function loginUser(login) {
    return axios.post(config.api_url+'/zzz/login', login)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}


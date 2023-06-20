import axios from "axios";
import { config } from "../config";
// recupérer le token avec getItem
const token = window.localStorage.getItem('VN_token')

export const saveUser = (data) => {
  return axios.post(`${config.api_url}/api/v1/user/add`, data)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export const updateProfil = (data) => {
  //console.log("data", data)
  //console.log("token", token)
  // passer le {headers: {"x-access-token": token}} en plus car route protégée
  return axios.put(`${config.api_url}/api/v1/user/update`, data, {headers: {"x-access-token": token}})
  .then((res)=>{
    console.log("res.data", res.msg)
    return res.data
})
.catch((err)=>{
    return err
})
};

export const loginUser = (data) => {
  return axios.post(`${config.api_url}/api/v1/user/login`, data)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export function checkToken(){
  //console.log("checkToken : ", token)    
  return axios.get(`${config.api_url}/api/v1/checkToken`, {headers: {"x-access-token": token}})
      .then((res)=>{
          return res.data
      })
      .catch((err)=>{
          return err
      })
}
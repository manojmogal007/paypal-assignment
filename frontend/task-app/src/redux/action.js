import axios from "axios"
import { url } from "../components/url"
import { ERROR, GETSPRINT, LOADING, SUCCESS } from "./actiontypes"

export const addsprint=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.post(`${url}/sprint/addsprint`,data)
        .then((res)=>{
            dispatch({type:SUCCESS})
        })
        .catch((err)=>{
            dispatch({type:ERROR})
        })
}

export const allsprints=()=>(dispatch)=>{
    dispatch({type:LOADING})
   return axios.get(`${url}/sprint/`)
    .then((res)=>{
        dispatch({type:GETSPRINT,payload:res.data.sprints})
    })
    .catch((err)=>{
        dispatch({type:ERROR})
    })
}
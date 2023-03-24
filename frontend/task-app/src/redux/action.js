import axios from "axios"
import { url } from "../components/url"
import { ERROR, GETSPRINT, GETTASK, LOADING, SUCCESS } from "./actiontypes"

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

export const alltasks=(id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.get(`${url}/task/${id}`)
    .then((res)=>{
        dispatch({type:GETTASK,payload:res.data.sprint_task})
    })
    .catch((err)=>{
        dispatch({type:ERROR})
    })
}

export const addtask=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.post(`${url}/task/addtask`,data)
        .then((res)=>{
            dispatch({type:SUCCESS})
        })
        .catch((err)=>{
            dispatch({type:ERROR})
        })
}

export const updatetask=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.patch(`${url}/task/updatetask/${data._id}`,data)
        .then((res)=>{
            dispatch({type:SUCCESS})
        })
        .catch((err)=>{
            dispatch({type:ERROR})
        })
}
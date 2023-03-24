import { ERROR, GETSPRINT, LOADING, SUCCESS } from "./actiontypes"

const initialstate={
    loading:false,
    error:false,
    sprints:[],
    tasks:[]
}

export const reducer=(state=initialstate,{type,payload})=>{
    switch (type){
        case LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case ERROR:{
            return {
                ...state,
                error:true,
            }
        }
        case SUCCESS:{
            return {
                ...state,
                loading:false
            }
        }
        case GETSPRINT:{
            return {
                ...state,
                loading:false,
                sprints:payload
            }
        }
        default:{
            return state
        }
    }
}
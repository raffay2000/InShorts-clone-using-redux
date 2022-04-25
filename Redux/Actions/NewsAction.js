import {
  SET_CATEGORY,
  SET_SOURCE,
  FETCH_API_SOURCE,
  FETCH_API,
  SET_INDEX,
  SET_IS_LOADING
  } from "../Constants"
import { getNewsAPI,categories,sources,getSourceAPI} from "../../API/Api"
import axios from 'axios'

export const fetchApiSource =(source)=>{
  return async function (dispatch){
    const { data } = await axios.get(getSourceAPI(source))
        dispatch({
          type:FETCH_API_SOURCE,
          payload:data
        })
  }
}

export const fetchApi =(category)=>{
  return async function (dispatch){
    const {data} = await axios.get(getNewsAPI(category))
        dispatch({
          type:FETCH_API,
          payload:data
        })
    }
}

export const setSource=(ur)=>{
    return{
      type:SET_SOURCE,
      payload:ur
  }
}
export const setCategory=(ur)=>{
  return{
    type:SET_CATEGORY,
    payload:ur
  }
}
export const setIndex=(ur)=>{
  return{
    type:SET_INDEX,
    payload:ur
  }
}
export const setIsLoading=(ur)=>{
  return{
    type:SET_IS_LOADING,
    payload:ur
  }
}
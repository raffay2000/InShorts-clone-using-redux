import {SET_NEWS,SET_CATEGORY, SET_SOURCE} from "../Constants"
import { getNewsAPI,categories,sources,getSourceAPI} from "../../API/Api"


export const setNews=(category)=>{
  return async function(dispatch){
    const response =  await fetch(getNewsAPI(category))
    const data= await response.json()
    dispatch({
      type:SET_NEWS,
      payload:data,
    })
  }
}

export const setSource=(url)=>{
    return{
        type:SET_SOURCE,
        payload:url
    }
}

export const setCategory=(ur)=>{
    return{
      type:SET_CATEGORY,
      payload:ur
  }
}
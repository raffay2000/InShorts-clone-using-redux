import {SET_CATEGORY, SET_NEWS, SET_SOURCE} from "../Constants"

const initialState = {
  news:[],
  category:"general",
  source:null,
  // index:1
}

export default (state=initialState,action)=>{
  switch(action.type){
    case SET_NEWS:
      return {
        ...state,
        // index:1,
        news:action.payload
      }
      case SET_SOURCE:
      return {
        ...state,
        source:action.payload
      }
      case SET_CATEGORY:
      return {
        ...state,
        category:action.payload
      }
    default:
      return state

  }
}


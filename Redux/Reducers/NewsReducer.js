import {SET_CATEGORY, SET_NEWS, SET_SOURCE,FETCH_API_SOURCE,FETCH_API,SET_INDEX, SET_IS_LOADING} from "../Constants"

const initialState = {
  news:[],
  category:"general",
  source:'',
  index:1,
  isLoading:true,
}

export default (state=initialState,action)=>{
  switch(action.type){
      case SET_SOURCE:
      return {
        ...state,
        source:action.payload,
        index:1,
        isLoading:true,
      }
      case SET_CATEGORY:
      return {
        ...state,
        category:action.payload,
        index:1,
        isLoading:true
      }
      case FETCH_API_SOURCE:
      return {
        ...state,
        index:1,
        isLoading:false,
        news:action.payload
      }
      case FETCH_API:
        return {
          ...state,
          index:1,
          isLoading:false,
          news:action.payload
        }
      case SET_INDEX:
      return {
        ...state,
        index:action.payload
      }
      case SET_IS_LOADING:
      return {
        ...state,
        isLoading:action.payload
      }
    default:
      return state

  }
}


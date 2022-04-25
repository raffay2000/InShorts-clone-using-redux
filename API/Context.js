import React,{createContext,useState,useEffect} from 'react'
// import { getNewsAPI, getSourceAPI,categories,sources } from './Api';
// import axios from 'axios';
// import { useDispatch,useSelector } from 'react-redux'; 
// import { fetchApiSource } from '../Redux/Actions/NewsAction';

export const NewsContext = createContext()
const Context = ({children}) => {
  // const dispatch = useDispatch()
  // const {source} = useSelector(state=>state.NewsReducer)
    // const [category, setCategory] = useState("general");
    // const [source, setSource] = useState();
    // const [news, setNews] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false)
    const [index, setIndex] = useState(1);
    // const fetchNews = async () => {
    //     const { data } = await axios.get(getNewsAPI(category));
    //     // setNews(data);
    //     setIndex(1);
    //   };
    
  //   const fetchNewsSource = async()=>{
  //     try {const {data} =  await axios.get(getSourceAPI(source))
  //     setSource(data)
  //     setIndex(1)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }   
  // useEffect(() => {
  //       fetchNews();
  //     }, [category]);
      // useEffect(() => {
      //   dispatch(fetchApiSource(source));
      //   // fetchNewsSource()
      // }, [source]);
  return (
    <NewsContext.Provider 
    value={{
      // news,
      index,
      setIndex,
      // fetchNews,
      // category,
      // setCategory,
      // source,
      // setSource,
      setDarkTheme,
      darkTheme
      }}>
        {children}
    </NewsContext.Provider>
  )
}

export default Context

// const styles = StyleSheet.create({})
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList
  } from "react-native";
  import React, { useContext,useEffect } from "react";
  import { NewsContext } from "../../API/Context";
  import { categories, getNewsAPI, getSourceAPI, sources } from "../../API/Api";
  import Carousel from "react-native-snap-carousel";
  import {setNews,setSource,setCategory} from "../../Redux/Actions/NewsAction"
  import {useDispatch,useSelector} from "react-redux"
  import axios from 'axios'
  
    const DiscoverScreen = () => {
        const dispatch = useDispatch();
        const {news,source,category} =useSelector(state=>state.NewsReducer)
    const WindowWidth = Dimensions.get("window").width;
    const Item_Width = Math.round( WindowWidth / 3 );
    useEffect(() => {
        fetchApi()
    }, [category])
    useEffect(() => {
        fetchApiSource()
    },[source])
        const fetchApiSource = async()=>{
            try {const {data} = await axios.get(getSourceAPI(source))
                dispatch(setSource(data))
                setIndex(1)
            }catch(error){
                console.log(error)
            }
       
        }
    const fetchApi= async()=>{
        const {data} = await axios.get(getNewsAPI(category))
        dispatch(setNews(data))
        setIndex(1)
    }
    const {setIndex} = useContext(NewsContext);
    return (
      <View style={styles.container}>
      
        <Text style={styles.Heading}>categories</Text>
        <Carousel
        layout="default"
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={()=>{dispatch(setCategory(item.name))}}>
            <Image source={{ uri: item.pic }} style={styles.caroselImage} />
            <Text style={{ fontSize: 18, textTransform: "capitalize" }}>
              {" "}
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        sliderWidth={WindowWidth}
        itemWidth={Item_Width}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        // inactiveSlideShift={10}
        inactiveSlideOpacity={1}
      />
        <Text style={styles.Heading}>source</Text>
        <View style={styles.sources}>
          {sources.map((s) => (
            <TouchableOpacity
              onPress={() => dispatch(setSource(s.id))}
              key={s.id}
              style={styles.sourceContainer}
            >
              <Image source={{ uri: s.pic }} style={styles.sourceImage}/>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  
  export default DiscoverScreen;
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: "center",
    },
    Heading: {
      fontSize: 30,
      fontWeight: "bold",
      paddingBottom: 8,
      marginHorizontal: 5,
      borderBottomColor: "#007FFF",
      borderBottomWidth: 5,
      alignSelf: "flex-start",
      borderRadius: 10,
    },
    caroselImage: {
      height: 130,
      margin: 10,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    sources: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      paddingVertical: 15,
    },
    sourceContainer: {
      height: 150,
      width: "40%",
      borderRadius: 10,
      margin: 15,
    },
    sourceImage: {
      height: "100%",
      borderRadius: 10,
      resizeMode: "cover",
    },
  });
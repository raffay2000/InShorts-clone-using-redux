import React, { useContext, useState ,useEffect} from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../../API/Context";
import {useDispatch,useSelector} from "react-redux"
import SingleNews from "../Components/SingleNews";
import {setNews} from "../../Redux/Actions/NewsAction"

const NewsScreen = () => {
  useEffect(()=>{
    dispatch(setNews("general"))
  })
  const dispatch = useDispatch();
  const {news:{articles}} = useSelector(state=>state.NewsReducer)
  const {
    // news: { articles },
    darkTheme,
  } = useContext(NewsContext);
// console.log(articles)
  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  // console.log(articles && articles[9]);

  return (
    <View style={styles.carousel}>
      {articles && 
        <Carousel
        firstItem={articles.slice(0, 12).length -1 }
        layout={"stack"}
        data={articles.slice(0, 12)}
        sliderHeight={300}
        itemHeight={windowHeight}
        vertical={true}
        renderItem={({ item, index }) => (
          <SingleNews item={item} index={index} darkTheme={darkTheme} />
        )}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      }
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    // transform: [{ scaleY: -1 }],
    transform:[{scaleY:-1}],
    backgroundColor: "black",
  },
});
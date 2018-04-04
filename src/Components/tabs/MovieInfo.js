import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  Animated
} from "react-native";

import { Actions } from "react-native-router-flux";
import Image from "react-native-image-progress";
import * as myActions from "../../Actions/";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");
import styles from "../Style";
import Carousel from "react-native-smart-carousel";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
import {API} from "../../Const/consts";
// import Modal from "react-native-modal";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = 140;

const datacarousel = [
  {
      "id": 339964,
      "title": "This is snowman first title",
      "imagePath": "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg", // URL
  },
  {
      "id": 339403,
      "title": "Snowman",
      "subtitle": "The guy you want",
      "imagePath": "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1511831669000/photosp/ig-494055507117907397_191706446/stock-photo-daytime-nature-nobody-outdoors-water-sunlight-tree-forest-scenics-ig-494055507117907397_191706446.jpg"
  },
];


class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      scrollY: new Animated.Value(0)  
    }
  }

  _renderScrollViewContent() {
    const data = Array.from({length: 8});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }
  
  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    if (this.state.loading) {
      return (
        <View style={styles.ActivityIndicatorContainer}>
          <ActivityIndicator
            animating={true}
            style={styles.indicatorPosition}
            size="large"
            color="black"
          />
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: 'red'}}>

          <ScrollView
            style={styles.fill}
            scrollEventThrottle={16}
            onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
            )}
          
          >
            {this._renderScrollViewContent()}
          </ScrollView>
        
          <Animated.View style={[styles.header, {height: headerHeight}]}>
            {/* <Animated.Image
              style={[
                styles.backgroundImage,
                {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
              ]}
              source={require('../../Images/logo.png')}
              /> */}
            <Animated.View>
              <Carousel
                style={[
                  styles.backgroundImage,
                  {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                ]}
                data={datacarousel}
              />
            </Animated.View>  
            <Animated.View style={styles.bar}>
              <Text style={styles.title}>Title</Text>
            </Animated.View>  
          </Animated.View>         
        </View>
      );
    }
  }
}
// mapStateToProps = (state, props) => {
//   return {
//     sliderImages: state.searchReducer.data,
//     info: state.detailReducer.data,
//     cast: state.castReducer.data,
//     review: state.reviewReducer.data
//   };
// };

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};

export default connect(null, mapDispatchToProps)(MovieInfo);
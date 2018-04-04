import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ListView,
    FlatList
  } from 'react-native';

import {Actions} from 'react-native-router-flux';
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MenuComponent from '../Components/menuComponent';
import styles from './Style';
import NowPlaying from './tabs/NowPlaying';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateListView} from '../Actions/';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return(
            <View style={{flex:1}}>
                <MenuComponent />
                <ScrollableTabView
                    initialPage={0}
                    tabBarTextStyle={{fontFamily: "Times New Roman, Times, serif", fontSize: 14}}
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#BDC3C7"
                    tabBarBackgroundColor="#333435"
                    tabBarUnderlineStyle={{ backgroundColor: "#42a383"}}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <NowPlaying 
                        tabLabel='TOP BOX OFFICE'
                        isListSingleRow = { this.props.isListSingleRow } 
                    />
                        
                    <View tabLabel='ANTICIPATED'>
                        <Text> Three</Text>
                    </View>
                </ScrollableTabView>
            </View>
      );
  }     
}

const Row = (props) => (
  <TouchableOpacity>
      <Text> {props.key} </Text>
  </TouchableOpacity>    
);

mapStateToProps = (state) => {
    return {
        isListSingleRow: state.listUpdate.isListSingleRow  
    };
}

mapDispatchToProps = dispatch => {
    return bindActionCreators({updateListView}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

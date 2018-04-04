import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView, 
    TouchableOpacity
  } from 'react-native';

import styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SideBar extends Component {
  render() {
      return(
        <View style={{flex: 1}}>
          <View style= {{
            flex: 0.25,
            borderColor: "red",
            backgroundColor: "#252826",
            alignContent: "space-around",
            padding: 5,
            flexDirection: "row"
            }}
          >
            <View style={{ paddingTop: 70, marginLeft: 10 }}>
              <Image source={require("../Images/tmdb.png")} style={{width: 50, height: 50}}  />
            </View>
            <View style={{ paddingTop: 90, marginLeft: 10 }}>
              <Text style={{color: "#FFF", fontSize: 15,fontFamily: "Times New Roman" }}> Connect to TMDB </Text>              
            </View>
          </View>
          <View style={{ flex: 0.75}}>
            <ScrollView>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="film" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Movies</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="tv" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>TV Shows</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="search" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Discover</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="user" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Polular Poeple</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.breakitems}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="bell" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Reminders</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="question-circle" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Contact Developer</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="google-plus" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Google+ Community</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="unlock-alt" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Unlock Pro</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sidemenuitems, {flexDirection: "row"}]}>
                <View style={styles.sideMenuIconView}>
                  <Icon name="cog" size={20} color="#BDC3C7" />
                </View>
                <View style={styles.sideMenuTextView}>
                  <Text style={styles.sidemenuText}>Settings</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      );
  }     
}

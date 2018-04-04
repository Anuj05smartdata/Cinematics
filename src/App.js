import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes/index';

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Routes/>
      </Provider>
    );
  }
}

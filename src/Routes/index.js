
import React, { Component } from 'react';
import {Router, Scene, Stack, Drawer, Actions} from 'react-native-router-flux';
import Home from '../Components/Home';
import sideBarComponent from '../Components/sidebar'
import MovieInfo  from '../Components/tabs/MovieInfo';
// import styles from '../Components/Style'

export default Routes = () => {
    return(
        <Router>
            <Stack key="root">
                <Drawer
                    key="drawer"
                    contentComponent = {sideBarComponent}
                    drawerWidth= {230}
                    title="Cinematics"
                    hideNavBar
                >
                    <Scene  key="Home" component={Home} hideNavBar initial />
                </Drawer>
                <Scene  key="movieInfo" component={MovieInfo} hideNavBar hideTabBar/>
            </Stack>
        </Router>
    ) 
}

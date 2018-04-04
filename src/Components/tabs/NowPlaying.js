import React, {Component} from 'react';
import {
    ActivityIndicator,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../Style';
import { ListView } from './ListView';
import { bindActionCreators } from 'redux';
import * as myActions from '../../Actions/';
import { connect } from 'react-redux';

class NowPlaying extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            lang: "en-US",
            currentPage: 1,
            partialPath: "movie/now_playing?api_key=",
            tabName: 'NOWPLAYING'
        }
    }

    componentWillReceiveProps = nextProps => {
        if(nextProps.movies != this.props.movies){
           this.setState({isLoading: !this.state.isLoading});
        }
    }

    componentWillMount(){
       this.props.getData(this.state.lang, this.state.currentPage, this.state.partialPath, this.state.tabName)
    }

    render(){
        if(this.state.isLoading) {
            return(
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator 
                        animating={true}
                        size="large" 
                        color="#000" 
                        style={styles.indicatorPosition}
                    />
                </View>
            );
        } else {
            return(
                <ListView
                    list = { this.props.movies } 
                    isListSingleRow={ this.props.isListSingleRow }
                />
            );
        }
    }
}

mapStateToProps = (state) => {
    return {
        movies: state.home.data
    };
}

mapDispatchToProps = (dispatch) => {
    return  bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
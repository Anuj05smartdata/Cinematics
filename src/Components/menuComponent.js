import React, {Component} from 'react';

import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import * as myActions from '../Actions/';
import { connect } from 'react-redux';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class MenuComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{
                flex:0.085,
                flexDirection: "row",
                backgroundColor: "#333435",
                justifyContent: 'space-between',
                alignItems: "center"
                }}
            >   
                <View style={{flexDirection: 'row'}}>
                    <View style={{margin: 10}}>
                        <TouchableOpacity onPress={()=>{Actions.drawerOpen('drawer')}} >
                            <Icon name="bars" size={20} color="#fff" style={{ padding: 5 }} />
                        </TouchableOpacity> 
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, color: "#fff", textAlign: "left"}}>
                            Cinematics
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{margin: 10}}>
                        <TouchableOpacity 
                            onPress={ ()=> {
                                this.props.updateListView();
                            }}
                        >
                            <Icon name={this.props.isListSingleRow ? 'table': 'list-ul'} size={20} color="#fff" style={{ padding: 15 }} />
                        </TouchableOpacity> 
                    </View>            
                    <View style={{margin: 10}}>
                        <TouchableOpacity>
                            <Icon name="search" size={20} color="#fff" style={{ padding: 15 }} />
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        isListSingleRow: state.listUpdate.isListSingleRow   
    }
}

mapDispatchToProps = dispatch => {
    return  bindActionCreators(myActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
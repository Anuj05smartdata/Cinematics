import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

const  ItemSeparator = () =>{
    return (
        <View style={{borderBottomColor: "#d6d8db", borderBottomWidth: 2}}></View>    
    );
    
};

export default ItemSeparator;
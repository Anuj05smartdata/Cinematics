import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

import renderIf from '../renderif';
import styles from '../Style';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API} from '../../Const/consts'
import ItemSeparator from './ItemSeparator';
import { Actions } from 'react-native-router-flux';


var {height, width} = Dimensions.get('window');

export class ListView extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{ flex: 0.94 }}>
                <FlatList
                    numColumns={this.props.isListSingleRow ? 1 : 3}
                    scrollEnabled={true}
                    data={this.props.list}
                    ItemSeparatorComponent = {this.props.isListSingleRow ? null : ItemSeparator}
                    keyExtractor={item => item.id.toString()}
                    key={`${
                    this.props.isListSingleRow
                        ? item => item.id.toString()
                        : item => item.id * (0.1).toString()
                    }`}
                    renderItem={({item, index}) => {
                        return(
                            <View style= {{
                                height: (this.props.isListSingleRow ? 0.2 : 0.3) * height,
                                flex: 1,
                                flexDirection: (this.props.isListSingleRow ? 'row' : 'column'),
                                
                            }}>
                                <View>
                                    <TouchableOpacity onPress = {() => { Actions.movieInfo({movie: item}) }}>
                                        <Image source={{uri: API.IMGPATH + item.poster_path}}
                                            style={{
                                                width: width * (this.props.isListSingleRow ? 0.2 : 0.3),
                                                height: height * 0.2,
                                                margin: 10 
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {/* ListView for multi grid  */}

                                {renderIf(!this.props.isListSingleRow)( 
                                    <TouchableOpacity onPress = {() => { Actions.movieInfo({movie: item}) }}>
                                        <View>
                                            <Text style={{textAlign: "center", fontWeight: 'bold'}}>
                                                {item.original_title}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )} 

                                {/* Single item list  */}
                                {renderIf(this.props.isListSingleRow)(
                                    <TouchableOpacity onPress = {() => { Actions.movieInfo({movie: item}) }}>
                                        <View
                                            style={{
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                padding: 10
                                            }}
                                        >   
                                            <Text style={styles.flatDate}>
                                                { new Date(item.release_date).getFullYear()}
                                            </Text>
                                            <Text style={styles.flatSTitle}>
                                                {item.original_title}
                                            </Text>
                                            <Text style={styles.flatSingleTT}>
                                                {item.popularity.toFixed(2)}
                                            </Text>
                                            <View style={{flexDirection: "row", alignContent: "center"}}>
                                                <Image source={{uri: "https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png"}}
                                                    style ={styles.rateImage}
                                                />
                                                <Text style={styles.rateText}>{item.vote_average}</Text>
                                                <Icon name= 'star' size={20} style={{ textAlignVertical: 'center', paddingLeft: 15}} color="#81e8a2" />
                                                <Text style={styles.rateText}>{(item.vote_count / 500.0).toFixed(1)}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}

                                
                            </View>
                        )
                    }}
                />
            </View>
        )    
    }
}
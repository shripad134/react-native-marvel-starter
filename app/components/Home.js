import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';

export default class Home extends Component {

    componentDidMount(){
        this.props.getCharacters();
    }

    render() {
        let characters = ""
        if(this.props.characters){
            characters = this.props.characters.map((item, index)=>{
                return <View><Text key={index}>{item.name}</Text></View>
            });
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Marvel Characters</Text>
                <ScrollView>{characters}</ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header:{
        fontWeight: "bold",
        marginBottom:20
    }
})
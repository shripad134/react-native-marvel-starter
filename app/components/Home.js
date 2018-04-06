import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Image,
    Dimensions
} from 'react-native';

export default class Home extends Component {

    componentDidMount(){
        
        this.props.getCharacters(this.props.navigation.state.params.name);
    }

    render() {
        let characters = ""
        if(this.props.characters){
            const {height, width} = Dimensions.get('window'); 
            characters = this.props.characters.map((item, index)=>{
                let thumbUri = item.thumbnail.path + '.'+  item.thumbnail.extension;
                return (                   
                        <View style={styles.container}>
                            <Text style={{fontSize: 25}}key={index}>{item.name}</Text>
                            <Image
                                style={{height: 300, width: width}}
                                source={{uri: thumbUri}} 
                            />
                        </View>
                );
            });
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Marvel Characters</Text>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {characters}
                </ScrollView>
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
    },
    contentContainer: {
        paddingVertical: 20
    }
})
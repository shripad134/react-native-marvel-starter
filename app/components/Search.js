import React from 'react';

import {
    View,
    TextInput,
    Button
} from 'react-native';

export default class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    };

    onSearch = () =>  {
        this.props.navigation.navigate('Home', { name: this.state.text});
    }
 
    render () {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 3}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    onPress={this.onSearch}
                    title="Search"
                    color="#841584"
                    accessibilityLabel="Search for your Marvel characters"
                />
            </View>
        );
    };
}
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <Text>Home Component. The Big Placeholder. A Nullity, pregnant with potential. You will return here soon.</Text>
            </View>
        );
    }
}

export default Home;
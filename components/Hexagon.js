import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default class Hexagon extends Component {
    render(){
        return(
            <View style={styles.diceView}>
                <ImageBackground source={require("../assets/images/d20.png")} style={styles.d20}>
                    <Text>{this.props.roll}</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    d20: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    diceView: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
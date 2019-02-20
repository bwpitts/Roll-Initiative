import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default class Hexagon extends Component {
    rollDie = () => {
        let roll = Math.floor(Math.random() * 20) + 1;
        console.log(roll);
    }

    render(){
        return(
            <TouchableOpacity style={styles.diceView} onPress={this.rollDie}>
                <ImageBackground source={require("../assets/images/d20.png")} style={styles.d20}>
                    <Text>{this.props.roll}</Text>
                </ImageBackground>
            </TouchableOpacity>
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
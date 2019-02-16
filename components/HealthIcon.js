import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HealthIcon extends Component {
    render(){
        return(
            <View style={styles.healthView}>
                <View style={styles.healthText}>
                    <Text>{this.props.health}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    healthText: {
        color: "black",
        transform: [{rotate: '-45deg'}]
    },
    healthView: {
        width: 30,
        height: 30,
        borderTopLeftRadius:0,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'red',
        transform: [{rotate: "45deg"}],
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
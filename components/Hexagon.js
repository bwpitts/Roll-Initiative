import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Hexagon extends Component {
    render(){
        return(
            <View style={styles.hexagon}>
                <View style={styles.hexagonInner} />
                <Text>1</Text>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonAfter} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hexagon: {
        width: 20,
        height: 11
    },
    hexagonInner: {
        width: 20,
        height: 11,
        backgroundColor: 'red'
    },
    hexagonAfter: {
        position: 'absolute',
        bottom: -5,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: 'red'
    },
    hexagonBefore: {
        position: 'absolute',
        top: -5,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderBottomWidth: 5,
        borderBottomColor: 'red'
    }
})
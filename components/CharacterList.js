import React, { Component } from 'react';
import { ScrollView, View, Alert, Text, StyleSheet, Animated } from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';
import { Subscribe } from 'unstated'
import CharacterStore from './CharacterStore';
import Hexagon from "./Hexagon";
import HealthIcon from "./HealthIcon";
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class CharacterList extends Component{
    renderLeftActions = (progress, dragX) => {
        const addHealth = (health) => {

        }
        const subHealth = () => {

        }
        return (
            <View style={styles.leftAction}>
                <RectButton style={styles.leftActionOne} onPress={this.close}>
                    <View style={{padding: 20, alignItems:"center"}}>
                        <Icon
                            name="add"
                            color="white"
                            size={25}
                        />
                    </View>
                </RectButton>
                <RectButton style={styles.leftActionTwo} onPress={this.close}>
                    <View style={{padding: 20, alignItems:"center"}}>
                        <Icon
                            name="remove"
                            color="white"
                            size={25}
                        />
                    </View>
                </RectButton>
            </View>
        );
    };
    updateRef = ref => {
        this._swipeableRow = ref;
    }
    close = () => {
        this._swipeableRow.close();
    }
    render(){
        return(
            <ScrollView>
                <Subscribe to={[CharacterStore]}>
                    {characterStore =>
                        characterStore.state.characters.map(char => (
                            <Swipeable
                                key={char.key}
                                ref={this.updateRef}
                                friction={1}
                                leftThreshold={50}
                                renderLeftActions={this.renderLeftActions}
                                overshootLeft={true}
                                onSwipeableClose={() => console.log(char.health)}>
                                <ListItem
                                    key={char.key}
                                    title={char.name}
                                    subtitle={char.charRace + " - " + char.charClass}
                                    leftIcon={<HealthIcon health={char.health}/>}
                                    rightIcon={<Hexagon roll={char.roll}/>}
                                    onPress={characterStore.selectCharacter.bind(this, char.key, char.name, char.roll, char.health, char.charRace, char.charClass)}
                                    onLongPress={() => Alert.alert(
                                        "Delete Character",
                                        "Do you want to Delete " + char.name,
                                        [
                                            {text: 'Yes', onPress: characterStore.deleteCharacter.bind(this, char.key)},
                                            {text: 'No', onPress: () => console.log("Cancel Pressed"), style: 'cancel'}
                                        ],
                                        {cancelable: false}
                                    )}
                                />
                            </Swipeable>
                        ))
                    }
                </Subscribe>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    leftActionOne:{
        backgroundColor: 'green',
        flex: 1
    },
    leftActionTwo:{
        backgroundColor: 'red',
        flex:1
    },
    leftAction:{
        flexDirection: 'row',
        flex: 1
    },
    actionText:{
        color: 'white',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})
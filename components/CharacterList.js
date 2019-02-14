import React, { Component } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Subscribe } from 'unstated'
import CharacterStore from './CharacterStore';

const CharacterList = () => {
    return(
        <ScrollView>
            <Subscribe to={[CharacterStore]}>
                {characterStore =>
                    characterStore.state.characters.map(char => (
                        <ListItem
                            key={char.key}
                            title={char.name}
                            chevron
                            badge={{value: char.roll}}
                            onPress={characterStore.selectCharacter.bind(this, char.key, char.name, char.roll)}
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
                    ))
                }
            </Subscribe>
        </ScrollView>
    )
}

export default CharacterList
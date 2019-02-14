import React, { Component } from 'react';
import { View } from 'react-native';
import { Overlay, Input, Button } from 'react-native-elements';
import { Subscribe } from 'unstated'
import CharacterStore from './CharacterStore';

const AddCharacterOverlay = () => {
    return(
        <View>
            <Subscribe to={[CharacterStore]}>
                {
                    characterStore =>
                        <Overlay
                            isVisible={characterStore.state.isVisible}
                            windowBackgroundColor="rgba(255, 255, 255, .8)"
                            overlayBackgroundColor="white"
                            width="100%"
                            height="100%"
                        >
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Input
                                    placeholder="Character Name"
                                    onChangeText={(value) => characterStore.setState({name: value})}
                                    value={characterStore.state.name}
                                />
                                <Input
                                    placeholder="Character Roll"
                                    onChangeText={(value) => characterStore.setState({roll: value})}
                                    keyboardType='numeric'
                                    value={characterStore.state.roll.toString()}
                                />
                                <Input
                                    placeholder="Character Health"
                                    onChangeText={(value) => characterStore.setState({health: value})}
                                    keyboardType='numeric'
                                    value={characterStore.state.health.toString()}
                                />
                                <Input
                                    placeholder="Race"
                                    onChangeText={(value) => characterStore.setState({charRace: value})}
                                    value={characterStore.state.charRace}
                                />
                                <Input
                                    placeholder="Class"
                                    onChangeText={(value) => characterStore.setState({charClass: value})}
                                    value={characterStore.state.charClass}
                                />
                                <Button raised title="Add Character" onPress={characterStore.addCharacter.bind(this)}/>
                            </View>
                        </Overlay>
                }
            </Subscribe>
        </View>
    )
}

export default AddCharacterOverlay
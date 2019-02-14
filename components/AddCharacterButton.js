import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Subscribe } from 'unstated';
import CharacterStore from './CharacterStore';

const AddCharacterButton = () => {
    return(
        <Subscribe to={[CharacterStore]}>
            {
                characterStore =>
                    <View>
                        <Button
                            icon={
                                <Icon
                                    name="add-circle"
                                    color="white"
                                    size={25}
                                />
                            }
                            onPress={characterStore.toggleVisibility.bind(this)}
                        />
                    </View>
            }
        </Subscribe>
    )
}

export default AddCharacterButton;
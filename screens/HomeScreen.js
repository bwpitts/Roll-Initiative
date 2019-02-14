import React from 'react';
import {
  View,
} from 'react-native';
import { Header } from 'react-native-elements';
import { Provider } from 'unstated';
import AddCharacterButton from '../components/AddCharacterButton';
import AddCharacterOverlay from '../components/AddCharacterOverlay';
import CharacterList from '../components/CharacterList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <Provider>
          <View style={{flex: 1, backgroundColor: '#ecf0f1'}}>
            <Header
                centerComponent={{text: 'Roll Initiative'}}
                rightComponent={<AddCharacterButton/>}
            />
            <AddCharacterOverlay/>
            <CharacterList/>
          </View>
        </Provider>
    );
  }
}

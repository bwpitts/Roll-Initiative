import { Container } from 'unstated'

class CharacterStore extends Container {
    state={
        characters: [],
        name: '',
        roll: '',
        isVisible: false,
        index: ''
    }

    toggleVisibility = () => {
        (this.state.isVisible) ? this.setState({ isVisible: false }) : this.setState({ isVisible: true })
    }

    addCharacter = () => {
        let characters = this.state.characters;
        if(this.state.index !== ''){
            let chars = this.state.characters.map((item, j) => {
                if (j === this.state.index){
                    let char = {key: item.key, name: this.state.name, roll: this.state.roll}
                    console.log(char);
                    return char
                } else {
                    return {key: item.key, name: item.name, roll: item.roll}
                }
            })
            this.setState({
                characters: chars,
                name: '',
                roll: '',
                index: ''
            })
                .then(() => this.sortCharacters(this.state.characters))
            this.toggleVisibility();
        } else {
            characters.push({key: characters.length, name: this.state.name, roll: this.state.roll})
            this.setState({characters, name: '', roll: '', isVisible: false, index: ''})
                .then(() => this.sortCharacters(this.state.characters))
        }
    }

    sortCharacters = (characters) => {
        let char = characters.sort((a,b) => a.roll - b.roll)
        .map((item, i) => {
            return{key: i, name: item.name, roll: item.roll}
        })
        this.setState({characters: char});
    }
    selectCharacter = (index, name, roll) => {
        this.toggleVisibility();
        this.setState({index: parseInt(index), name, roll: parseInt(roll)});
    }

    deleteCharacter = (index) => {
        this.setState({
            characters: this.state.characters.filter((_, i) => i !== index)
        }).then(
            () => console.log(this.state.characters)
        )
    }
}

export default CharacterStore
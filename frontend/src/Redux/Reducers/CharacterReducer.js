const initialStateOfCharacter = {
    Characters: [],
    copyCharacters: []
}

function CharactersReducer(state = initialStateOfCharacter, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {


        default:
            return { ...state };

    }
}
export default CharactersReducer;
import { GET_CHARACTER_ID, GET_CHARACTERS } from '../Actions/actions'

const initialStateOfCharacter = {
    Characters: [],
    copyCharacters: [],
    detailCharacter: []
}

function CharactersReducer(state = initialStateOfCharacter, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                Characters: payload,
                copyCharacters: payload
            }
        case GET_CHARACTER_ID:
            return {
                ...state,
                detailCharacter: payload
            }

        default:
            return { ...state };

    }
}
export default CharactersReducer;
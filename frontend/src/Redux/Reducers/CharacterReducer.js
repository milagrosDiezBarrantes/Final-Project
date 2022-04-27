import { GET_CHARACTER_ID } from '../Actions/actions'

const initialStateOfCharacter = {
    Characters: [],
    copyCharacters: [],
    detailCharacter:{}
}

function CharactersReducer(state = initialStateOfCharacter, {type, payload}) {
    // eslint-disable-next-line default-case
    switch (type) {
        case GET_CHARACTER_ID:
            return {
                ...state,
                detailCharacter:payload
            }

        default:
            return { ...state };

    }
}
export default CharactersReducer;
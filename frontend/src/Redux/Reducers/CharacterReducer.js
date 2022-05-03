
import { GET_CHARACTER_ID, GET_CHARACTERS,GET_NAME } from '../Actions/actions'
import {GET_CREATORS} from "../Actions/FilterOrderActions"


const initialStateOfCharacter = {
    Characters: [],
    copyCharacters: [],
    detailCharacter: [],
    creators:[],
    copyCreators:[]
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
            case GET_NAME:
                return {
                    ...state,
                    copyCharacters: payload
                }
            case GET_CREATORS:
                return {
                    ...state,
                    creators:payload
                }
            /* case GET_BY_CREATOR:
                    const data = payload === ''? copyCharacters:state.copyCharacters.filter(character => {
                    let autors = character.Creators.map(d => d.name)
                
                    if (diet.includes(action.payload)){
                        
                        return character
                    }
                    return null
                })   
                return {
                    ...state,
                    copyCharacters:[]
                } */
        default:
            return { ...state };

    }
}
export default CharactersReducer;
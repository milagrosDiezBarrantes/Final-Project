import { combineReducers } from 'redux'
import CharactersReducer from './CharacterReducer'
import ComicsReducer from './ComicReducer'
const rootReducer = combineReducers({
    CharactersReducer,
    ComicsReducer,
})


export default rootReducer
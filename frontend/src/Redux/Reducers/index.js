import { combineReducers } from 'redux'
import CharactersReducer from './CharacterReducer'
import ComicsReducer from './ComicReducer'
import AdminReducer from './AdminReducer'
import UserReducer from './UserReducer'
const rootReducer = combineReducers({
    CharactersReducer,
    ComicsReducer,
    AdminReducer,
    UserReducer
})


export default rootReducer
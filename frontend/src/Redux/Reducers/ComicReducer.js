import { GET_TITLE, GET_BY_ID, GET_COMICS, GET_USERS, FILT_BY_PLAN, AUTHENTICATED, UPDATE_COMIC, DELETE_COMIC } from '../Actions/actions'
import { FILT_BY_CHARACTER,FILT_BY_CREATOR } from '../Actions/FilterOrderActions';

const initialState = {
    Comics: [],
    copyComics: [],
    selectedComic: [],
    users:[],
    copyUsers:[],
    authenticated: false,

} 
/* Array.prototype.lowerCase= function(){      //prototipo para mejorar la busqueda por creador 
    let newA = []
    for(let i = 0; i<Array.length; i++){
        newA.push(Array[i].toString().toLowerCase())
    }
    return newA
} */
function ComicsReducer(state = initialState, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case GET_TITLE:
            let comicss = [...state.Comics];
            let filtComic = comicss?.filter(comic=>comic.title.toLowerCase().includes(payload.toLowerCase()));
            return {
                ...state,
                copyComics: filtComic,
                
            }
    
        case GET_BY_ID:{
            return {
                ...state,
                selectedComic: payload
            }
        }
        case GET_COMICS:
            return {
                ...state,
                Comics:payload,
                copyComics: payload
                
            }
        case FILT_BY_CHARACTER: 
            return{
                ...state,
                copyComics:[]
            }
        case FILT_BY_CREATOR:
            
            let comi = [...state.Comics]
            let filtComics = comi?.filter((a) => a.creators === []? false : a.creators.includes(payload)) 
            
            return{
                ...state,
                copyComics:filtComics
            }
        case GET_USERS:
            return{
                ...state,
                users:payload,
                copyUsers:payload
            }
        case UPDATE_COMIC:
			const comicEdit = state.Comics.findIndex(c => c.id === type.payload.id);
			state.Comics[comicEdit] = type.payload;
            console.log(comicEdit)
			return {
				...state,
				copyComics: [...state.Comics]
			};
        case DELETE_COMIC:
            let deletedComic = state.Comics.filter(c => c.id !== type.payload.id)
            return {
                ...state,
                copyComics: [...deletedComic]
            };
        case FILT_BY_PLAN:
            const backUp = [...state.users]
            const filtered = backUp.filter(user => user.plan === payload)
            return{
                ...state,
                copyUsers:filtered,
            }
        case AUTHENTICATED:
            return {
                ...state,
                authenticated:payload
            }
        default:
            return { ...state };
    }
}
export default ComicsReducer;
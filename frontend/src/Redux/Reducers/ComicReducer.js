import { GET_TITLE, GET_BY_ID, GET_COMICS } from '../Actions/actions'


const initialStateOfComic = {
    Comics: [],
    copyComics: [],
    selectedComic: []
}

function ComicsReducer(state = initialStateOfComic, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case GET_TITLE:
            let comicss = [...state.Comics]
            let filtComics = comicss?.filter(comic=>comic.title.toLowerCase().includes(payload.toLowerCase()))
            return {
                ...state,
                copyComics: filtComics,
                
            }
    
        case GET_BY_ID:{
            console.log(payload,' en reducer ');
            return {
                ...state,
                selectedComic: payload
            }
        }
        case GET_COMICS:
            return {
                ...state,
                Comics: payload,
                copyComics: payload
                
            }

        default:
            return { ...state };
    }
}
export default ComicsReducer;
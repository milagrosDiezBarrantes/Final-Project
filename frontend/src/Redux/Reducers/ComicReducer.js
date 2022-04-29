import { GET_TITLE, GET_BY_ID } from '../Actions/actions'


const initialStateOfComic = {
    Comics: [],
    copyComics: [],
    selectedComic: []
}

function ComicsReducer(state = initialStateOfComic, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case GET_TITLE:
            return {
                ...state,
                Comics: payload
            }
    
        case GET_BY_ID:{
            console.log(payload,' en reducer ');
            return {
                ...state,
                selectedComic: payload
            }
        }

        default:
            return { ...state };
    }
}
export default ComicsReducer;
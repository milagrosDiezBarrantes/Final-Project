import { GET_TITLE } from '../Actions/actions'

const initialStateOfComic = {
    Comics: [],
    copyComics: []
}

function ComicsReducer(state = initialStateOfComic, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case GET_TITLE:
            return {
                ...state,
                Comics: payload
            }

        default:
            return { ...state };
    }
}
export default ComicsReducer;
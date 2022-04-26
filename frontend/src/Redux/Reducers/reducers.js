const initialState = {
    Characters: [],
    copyCharacters: [],
    Comics: [],
    copyComics: [],
}

function rootReducer(state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {


        default:
            return { ...state };

    }
}
export default rootReducer;
const initialState = {
    Characters: [],
    copyCharacters: [],
    Comics: [],
    copyComics: [],
}

function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'getCharacters':
            return{
                   ...state, 
                   Characters: payload, 
                   copyCharacters: payload, 
                   loading: false
                };
        case 'getTypes':
            return{
                   ...state, 
                   types: payload
                }   
        case 'getCharactersByName':
            return{
                ...state, 
                copyCharacters: payload, 
                loading: false
            }        
         case 'getCharactersById':
               return {
                   ...state, 
                }
         case 'filterByTypes':
                const allTypes = state.allCharacters
                const typesFilter = payload === 'all' ? allTypes : allTypes.filter(character => {
                for(let type of character.type){
                if(payload === type){
                    return character
                    } 
                }
                });
                return{...state, copyCharacters: typesFilter}            

        default:
            return { ...state };

    }
}
export default rootReducer;
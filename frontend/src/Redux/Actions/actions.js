import axios from 'axios';

export function getCharacters(){
    return async function(dispatch){
        dispatch({type:'Loading'})
        let json = await axios('/characters')
        return dispatch({
            type: 'getCharacters',
            payload: json.data
        })
    }
}

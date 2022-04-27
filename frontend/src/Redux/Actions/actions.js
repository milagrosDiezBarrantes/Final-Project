import axios from 'axios';

//================CHARACTERS=================//
export function getChar() {
    return async function (dispatch) {
        try {
            const allCharacters = await axios.get('localhost:3001/characters');
            return dispatch({
                type: "GET_CHARACTERS",
                payload: allCharacters.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}






module.export = {
    GET_CHARACTERS: "GET_CHARACTERS"
}



//================COMICS=================//
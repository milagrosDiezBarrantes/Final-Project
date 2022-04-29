import axios from 'axios';
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_TITLE = "GET_TITLE";
export const POST_USER = "POST_USER";

//================CHARACTERS=================//
export function getAllCharacters() {
    return async function (dispatch) {
        try {
            const allCharacters = await axios.get('localhost:3001/characters');
            return dispatch({
                type: GET_CHARACTERS,
                payload: allCharacters.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}




//================COMICS=================//


export function getComicsByTitle(title) {
    return async function (dispatch) {
        try {
            const queryTitle = await axios.get(`http://localhost:3001/comics?title=${title}`)
            return dispatch({
                type: GET_TITLE,
                payload: queryTitle.data
            })
        }
        catch (err) {
            alert('Title not found', err)
        }
    }
}

//================USER=================//
export function postUser(payload) {
    return async function(dispatch) {
        try {
            const urlPost = await axios.post('http://localhost:3001/user', payload);
            return dispatch ({
                type: POST_USER,
                payload: urlPost.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
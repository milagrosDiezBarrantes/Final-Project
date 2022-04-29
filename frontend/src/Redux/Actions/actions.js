import axios from 'axios';
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_TITLE = "GET_TITLE";
export const GET_COMICS = "GET_COMICS"
export const GET_CHARACTER_ID = "GET_CHARACTER_ID" // caso personaje por id
export const GET_NAME = "GET_NAME" // buscar character por nombre

//================CHARACTERS=================//
export function getAllCharacters() {    // Obtener todos los personajes
    return async function (dispatch) {
        try {
            const allCharacters = await axios.get('http://localhost:3001/characters');

            return dispatch({
                type: GET_CHARACTERS,
                payload: allCharacters.data
            });
        }
        catch (error) {
            console.log(error)
        }
    }
}
export function getCharacterId(id) { // Obtener personaje por id
    return async function (dispatch) {
        try {

            const { data } = await axios.get(`http://localhost:3001/characters/:${id}`);

            return dispatch({
                type: GET_CHARACTER_ID,
                payload: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function getCharacterByName(name) { //obten personajes por nombre
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/characters?name=${name}`);// sin terminar
            return dispatch({
                type: GET_NAME,
                payload: data
            })
        }
        catch (error) {
            console.log(error)
            alert('Name not found', error)
        }
    }
}



//================COMICS=================//

export function getAllComics() {          //para trerce todos los comics
    return async function (dispatch) {
        try {
            const { data } = await axios.get(``)
            return dispatch({
                type: GET_COMICS,
                payload: data
            })
        }
        catch (err) {
            alert("error get comics(se rompio)", err)
        }
    }
}




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


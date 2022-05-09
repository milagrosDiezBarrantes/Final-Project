import axios from 'axios';
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_TITLE = "GET_TITLE";
export const GET_BY_ID = "GET_BY_ID";
export const CREATE_USER = "CREATE_USER";
export const GET_COMICS = "GET_COMICS"
export const USER_EDIT = "USER_EDIT"; 
export const UPDATE_COMIC = "UPDATE_COMIC";
export const DELETE_COMIC = "DELETE_COMIC";
export const GET_CHARACTER_ID = "GET_CHARACTER_ID" // caso personaje por id
export const GET_NAME = "GET_NAME"; // buscar character por nombre
export const GET_USERS = "GET_USERS";
export const FILT_BY_PLAN = "FILT_BY_PLAN";
//Autentication
export const AUTHENTICATED = "AUTHENTICATED";
export const REMEMBER_ME = "REMEMBER_ME";
export const UPDATE_PERMISSION= 'UPDATE_PERMISSION';
export const LOGIN_USER = 'LOGIN_USER;'

//================CHARACTERS=================//
export function getAllCharacters() {    // Obtener todos los personajes
    return async function (dispatch) {
        try {
            const allCharacters = await axios.get('http://localhost:3001/characters/all');

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

            const { data } = await axios.get(`http://localhost:3001/characters/${id}`);

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
            const { data } = await axios.get(`http://localhost:3001/characters/all?name=${name}`);
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
            const { data } = await axios.get(`http://localhost:3001/comics`)
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
            //const queryTitle = await axios.get(`http://localhost:3001/comics?title=${title}`)
            return dispatch({
                type: GET_TITLE,
                payload: title
            })
        }
        catch (err) {
            alert('Title not found', err)
        }
    }

}

export const getById = (id) => async dispatch => {
    try{
        const res= await axios(`http://localhost:3001/comics/${id}`);
        console.log('llega id?', id)
        console.log('llega comic al payoad?', res)
        return dispatch({
            type: GET_BY_ID,
            payload: res.data            
    })

    }catch(err){
        console.log(err);
    }
    
}

//======================USER  ===============
export const createUser= (user) => {
        return async (dispatch) => {
            try {
                const userCreate = await axios.post(`http://localhost:3001/user`, user);
                console.log(userCreate, 'se crea usuario?');
                return dispatch({
                    type: CREATE_USER,
                    payload: userCreate.data
                })
            }
            catch(err) {
                console.log(err, 'userCreate || Error');
            }
        }
}

//LOGIN

export const loginUser= (userName, password) => {
        return async (dispatch) => {
            try {
                const userLogin = await axios.get(`http://localhost:3001/user/login`, {userName, password});
                console.log(userLogin, 'se logeo el user?');
                return dispatch({
                    type: LOGIN_USER,
                    payload: userLogin.data
                })
            }
            catch(err) {
                console.log(err, 'userCreate || Error');
            }
        }
}

export const userEdit = (user) => {
    return async (dispatch) => {
        try {
            console.log(user);
            const editUser = await axios.put(`http://localhost:3001/user/${user.id}`, user);
            console.log(editUser, 'se edita?');
            return dispatch({
                type: USER_EDIT,
                payload: editUser.data
            })
        }
        catch(err) {
            console.log(err, 'userEdit || Error');
        }
    }
}

export function getAllUsers (){    
    return async function(dispatch) {
        try {
            const users = await axios('http://localhost:3001/user');
            console.log(users.data)
            return dispatch ({
                type: GET_USERS,
                payload: users.data
            })
    }
    catch(error){
        console.log(error)
    }
}
}

export function setRememberMe() {
	return {
        type: 'REMEMBER_ME' 
    }
}

// ==================ADMIN POST============================

export function updateComic(comic) {
    return async function(dispatch) {
        try {
            const comicE = {
                title: comic.title,
                description: comic.description,
                image: comic.image,
            };
            const editComic = await axios.put(`http://localhost:3001/comics/${comic.id}`, comicE);
            return dispatch ({
                type: UPDATE_COMIC,
                payload: editComic.data
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}

export const deleteComic = (id) => {
    return async (dispatch) => {
        try {
            const comicDelete= await axios.delete(`http://localhost:3001/comics/${id}`);
            return dispatch({
                type: "DELETE_COMIC",
                payload: comicDelete.data.remove,
            })
        }
        catch (error) {
            console.log(error);
        }
    }
};


export const filterByPlan = (plan) =>{
    return{
        type: FILT_BY_PLAN,
        payload: plan
    }
}
//================AUTHENTICATED=================//
export function authenticateUser(){
    return{
        type: AUTHENTICATED,
        payload: true
    }
}


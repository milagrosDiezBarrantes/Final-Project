import axios from 'axios';
import { PlaceholderLine } from 'semantic-ui-react';
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_TITLE = "GET_TITLE";
export const GET_BY_ID = "GET_BY_ID";
export const CREATE_USER = "CREATE_USER";
export const GET_COMICS = "GET_COMICS"
export const USER_EDIT = "USER_EDIT"; 
//ADMIN ACTIONS
export const POST_COMIC = 'POST_COMIC';
export const UPDATE_COMIC = "UPDATE_COMIC";
export const DELETE_COMIC = "DELETE_COMIC";

export const GET_CHARACTER_ID = "GET_CHARACTER_ID" // caso personaje por id
export const GET_NAME = "GET_NAME"; // buscar character por nombre
export const GET_USERS = "GET_USERS";
export const FILT_BY_PLAN = "FILT_BY_PLAN";

//Autentication
export const AUTHENTICATED = "AUTHENTICATED";
export const REMEMBER_ME = "REMEMBER_ME";
export const LOGIN_USER = 'LOGIN_USER;'
export const CLEAR_COMICS = "CLEAR_COMICS";
export const CLEAR_DETAIL = 'CLEAR_DETAIL';

//Planes
export const GET_PLANS = 'GET_PLANS';


export const SORT = "SORT"


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
                    payload: userCreate.data.user
                })
            }
            catch(err) {
                console.log(err, 'userCreate || Error');
            }
        }
}

//LOGIN

export const loginUser= ({userName, password}) => {
        return async (dispatch) => {
            try {
                const userLogin = await axios.get("http://localhost:3001/user/login",{
                    params: {
                        userName, password
                    }})
                    console.log('ACAAAA USER LOGIN',userLogin)
                    console.log(userName)
                    console.log(userName)
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

export function setRememberMe(paylaoad) {
	return {
        type: 'REMEMBER_ME',
        paylaoad
    }
}

export function getPlans() {
    return async function(dispatch) {
        try {
            const plansUser = await axios.get('http://localhost:3001/plans')
            const plan = plansUser.data.filter(e=>e.name !=="admin")
            console.log(plan)
            return dispatch({
                type:GET_PLANS,
                payload: plan
            })
        } 
        catch (error) {
            console.log(error)
        }
    }
}
// ==================ADMIN POST============================
export function postComic(payload) {
    return async function(dispatch) {
        try {
            const comicPost = await axios.post('http://localhost:3001/create', payload)
            return dispatch({
                type:POST_COMIC,
                payload: comicPost.data
            })
        } 
        catch (error) {
            console.log(error)
        }
    }
}

export function updateComic(id) {
    return async function(dispatch) {
        try {
            const comicE = {
                title: id.title,
                description: id.description,
                image: id.image,
            };
            const editComic = await axios.put(`http://localhost:3001/comics/${id}`, comicE);
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
    console.log(plan)
    console.log('llega plan?', Number(plan))
    return{
        type: FILT_BY_PLAN,
        payload: Number(plan)
    }
}

// export const sortBy = (payload) =>{
//     return{
//         type: SORT,
//         payload: payload
//     }


// }
//================AUTHENTICATED=================//
export function authenticateUser(){
    return{
        type: AUTHENTICATED,
        payload: true
    }
}


//=================CLEAN=================//
export const clearComics =() => {
    return async function (dispatch) {
        return dispatch({
            type: CLEAR_COMICS,
            payload: []
        })
    }
}

export const clearComicDetail =() => {
    return async function (dispatch) {
        return dispatch({
            type: CLEAR_DETAIL,
            payload: []
        })
    }
}
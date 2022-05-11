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

export const FILT_BY_PLAN = "FILT_BY_PLAN"
export const GET_NAME = "GET_NAME"
export const GET_USERS = "GET_USERS"

//Autentication
export const AUTHENTICATED = "AUTHENTICATED";
export const REMEMBER_ME = "REMEMBER_ME";
export const UPDATE_PERMISSION= 'UPDATE_PERMISSION';
export const LOGIN_USER = 'LOGIN_USER;'

 // buscar character por nombre
export const GET_PLANS = 'GET_PLANS';

export const SORT = "SORT"
//Autentication
export const CLEAR_COMICS = "CLEAR_COMICS"
export const CLEAR_DETAIL = 'CLEAR_DETAIL'

//Favorite
export const POST_FAVORITE_COMICS = "POST_FAVORITE_COMICS"
export const POST_FAVORITE_CHARACTERS = "POST_FAVORITE_CHARACTERS"
export const GET_FAVORITES = "GET_FAVORITES"

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
        // console.log('llega id?', id)
        // console.log('llega comic al payoad?', res)
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

//====================== LOGIN ===============

export const loginUser= ({userName,password}) => {
        return async (dispatch) => {
            try {
                const userLogin = await axios.get("http://localhost:3001/user/login",{
                    params: {
                        userName,password
                    }});
                // console.log("de la action");
                // console.log(userName,password);
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
export const getFavorites= (id) => {
        return async (dispatch) => {
            try {
                const favorites = await axios.get(`http://localhost:3001/user/favoritesComics`, {
                    params: {
                        id
                    }});
                console.log(favorites.data, 'se favoriteo el user?');
                return dispatch({
                    type: GET_FAVORITES,
                    payload: favorites.data
                })
            }
            catch(err) {
                console.log(err, 'userCreate || Error');
            }
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
export function postComic(comic) {
    return async function(dispatch) {
        try {
            const comicE = {
                title: comic.title,
                description: comic.description,
                image: comic.image,
            };
            const editComic = await axios.post(`http://localhost:3001/comics/${comic.id}`, comicE);
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

export const sortBy = (payload) =>{
    return{
        type: SORT,
        payload: payload
    }


}
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


//=================FAVORITE COMICS=================//

export function postFavoriteComics(idComics, id) {          
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`http://localhost:3001/user/favoritesComics`,{idComics, id});
            const nuevos = await axios.get(`http://localhost:3001/user/favoritesComics`,{
                params: {
                    id
                }});
           console.log("action",idComics)
           console.log("nuevos",nuevos)
            return dispatch({
                type: "POST_FAVORITE_COMICS",
                payload: nuevos.data
            })
        }
        catch (err) {
            alert("error get comics(se rompio)", err)
        }
    }
}

/*export function removeFavoriteComics() {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/user/favoritesComics`)
            return dispatch({
                type: "REMOVE_FAVORITE",
                payload: data
            })
        }
        catch (err) {
            alert("error get comics(se rompio)", err)
        }
    }
}*/
//=================FAVORITE CHARACTERS=================//
/*export function postFavoriteCharacters(idCharacters, id) {          
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/user/favoritesCharactersc`, idCharacters, id)
            return dispatch({
                type: "POST_FAVORITE_CHARACTERS",
                payload: data
            })
        }
        catch (err) {
            alert("error get comics(se rompio)", err)
        }
    }
}
*/

export function postFavoriteCharacters(idCharacters, id) {          
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`http://localhost:3001/user/favoritesCharactersc`,{idCharacters, id});
            const nuevos = await axios.get(`http://localhost:3001/user/favoritesCharactersc`,{
                params: {
                    id
                }});
            return dispatch({
                type: "POST_FAVORITE_CHARACTERS",
                payload: nuevos.data
            })
        }
        catch (err) {
            alert("error get Characters(se rompio)", err)
        }
    }
}
/*export function removeFavoriteCharacters() {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/user/favoritesCharacters`)
            return dispatch({
                type: "REMOVE_FAVORITE",
                payload: data
            })
        }
        catch (err) {
            alert("error get comics(se rompio)", err)
        }
    }
}*/

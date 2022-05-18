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
export const GET_USER_DATA = "GET_USER_DATA"
export const SET_USER_DATA = "SET_USER_DATA"

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
export const USER_STATUS = "USER_STATUS"
export const GET_FAVORITE_CHARACTERS = "GET_FAVORITE_CHARACTERS"

//Admin post

export const POST_COMICS = "POST_COMICS"
export const GET_CREATORS = "GET_CREATORS"
export const GET_CREATED_COMICS = " GET_CREATED_COMICS"
export const GET_ADMIN = "GET_ADMIN"
export const FILT_BY_STATS = "FILT_BY_STATS"

export const POST_PAYMENT = "POST_PAYMET"

//================CHARACTERS=================//
export function getAllCharacters() {    // Obtener todos los personajes
    return async function (dispatch) {
        try {
            const allCharacters = await axios.get('/characters/all');

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

            const { data } = await axios.get(`/characters/${id}`);

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
            const { data } = await axios.get(`/characters/all?name=${name}`);
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
            const { data } = await axios.get(`/comics`)
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
            //const queryTitle = await axios.get(`/comics?title=${title}`)
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
        const res= await axios(`/comics/${id}`);
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
// function createUser() {
//     axios.post(`/user`, {email:user.email, nickname: user.nickname, name: user.name});
//     console.log("SE CREA EL USER?")
//   }
export const setUserByEmail= (email, user) => {
    (console.log("email en reducer", email))
    return async function (dispatch) {
        try{
            const res= await axios.put(`/user/${email}`, user);
            console.log('llega email.data?', res.data)
            return dispatch({
                type: SET_USER_DATA,
                payload: res.data
            })
        }catch(err){
            console.log(err);
        }
    }
    }

    export const getUserByEmail = (email) => async dispatch => {
        try{
            const res= await axios(`/user/${email}`);
            console.log('llega email.data?', res.data.userOld)
            return dispatch({
                type: GET_USER_DATA,
                payload: res.user
            })
        }catch(err){
            console.log(err);
        }
    }
    

    // console.log('llega user?', user)    
    //     return async (dispatch) => {
    //         try {
    //             console.log("email", user.email, "nickname", user.nickname, "name", user.name)
    //             const userCreate = await axios.post(`/user`, {email:user.email, nickname: user.nickname, name: user.name});
    //             console.log(userCreate, 'se crea usuario?');
    //             return dispatch({
    //                 type: CREATE_USER,
    //                 payload: userCreate.data
    //             })
    //         }
    //         catch(err) {
    //             console.log(err, 'userCreate || Error');
    //         }
    //     }

//====================== LOGIN ===============
export const login = (payload)=>{
    console.log('llega user?', payload)
    return {
        type: LOGIN_USER,
        payload: payload.userOld
    }
}

export const loginUser= (email) => {
        return async (dispatch) => {
            try {
                const userLogin = await axios.get("/user/login",{
                    params: {
                        email
                    }});
                // console.log("de la action");
                console.log(email);
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
// export const pruebaStatusLog =(user)=>{
//     return async (dispatch) => {
//     return await dispatch({
//         type: LOGIN_USER,
//         payload: user
//     })
// }
// }

export const getFavorites= (email) => {
        return async (dispatch) => {
            try {
                const favorites = await axios.get(`/user/favoritesComics/${email}`);
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
            const plansUser = await axios.get('/plans')
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


// export const userEdit = (user) => {
//     return async (dispatch) => {
//         try {
//             console.log(user);
//             const editUser = await axios.put(`/user/${user.id}`, user);
//             console.log(editUser, 'se edita?');
//             return dispatch({
//                 type: USER_EDIT,
//                 payload: editUser.data
//             })
//         }
//         catch(err) {
//             console.log(err, 'userEdit || Error');
//         }
//     }
// }

export function getAllUsers (){    
    return async function(dispatch) {
        try {
            const users = await axios('/user');
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
export function getAdmin(email) {
    console.log('llega este email??',email)
    return async function(dispatch) {
        try {
            const adminLogin = await axios.get(`/user/admin/${email}`)
            console.log('actions get admin',adminLogin)
            return dispatch({
                type: GET_ADMIN,
                payload : adminLogin.data
            })
        } 
        catch (error) {
            console.log('no es el email del admin',error)
        }
    }
}

export function updateComic(comic) {
    return async function(dispatch) {
        try {
            const comicE = {
                title: comic.title,
                description: comic.description,
                image: comic.image,
            };
            const editComic = await axios.put(`/comics/update/${comic.id}`, comicE);
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
                img: comic.img,
                pages: comic.pages,
                creators:comic.creators
            };
            const editComic = await axios.post("/comics/create", comicE);
            return dispatch ({
                type: POST_COMICS,
                payload: editComic.data
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}

export const deleteComic = (id) => {
    console.log(id)
    return async (dispatch) => {
        try {
            const comicDelete= await axios.delete(`/comics/delete/${id}`);
            
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
        payload: Number(plan)
    }
}

export const filterByStats = (payload) =>{
    return{
        type: FILT_BY_STATS,
        payload: payload
    }
}

export const sortBy = (payload) =>{
    return{
        type: SORT,
        payload: payload
    }
}
export const getCreators = () =>{
    return async (dispatch) => {
        try {
            const {data}= await axios.get(`/creators/all`);
            return dispatch({
                type: GET_CREATORS,
        payload: data
            })
        }
        catch (error) {
            console.log(error);
        }
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

export function postFavoriteComics(idComics, email) {          
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`/user/favoritesComics`,{idComics, email});
            const nuevos = await axios.get(`/user/favoritesComics/${email}`);
            
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
            const { data } = await axios.get(`/user/favoritesComics`)
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
            const { data } = await axios.get(`/user/favoritesCharactersc`, idCharacters, id)
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

export function postFavoriteCharacters(idCharacters, email) {          
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`/user/favoritesCharacters`,{idCharacters, email});
            const nuevos = await axios.get(`/user/favoritesCharacters/${email}`);
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
export function getFavoritesCharacters(email) {          
    return async function (dispatch) {
        try {
            const nuevos = await axios.get(`/user/favoritesCharacters/${email}`);
            return dispatch({
                type: "GET_FAVORITE_CHARACTERS",
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
            const { data } = await axios.get(`/user/favoritesCharacters`)
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


//PAYPAL
export function postPayment(pago) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`/success`,pago)
            return dispatch({
                type: "POST_PAYMENT",
                payload: data
            })
        }
        catch (err) {
            alert("error post paypal(se rompio)", err)
        }
    }
    }

import {
  GET_TITLE,
  GET_BY_ID,
  GET_COMICS,
  GET_USERS,
  FILT_BY_PLAN,
  AUTHENTICATED,
  UPDATE_COMIC,
  DELETE_COMIC,
  CLEAR_COMICS,
  CLEAR_DETAIL,
  // ADD_FAVORITE,
  POST_FAVORITE_COMICS,
  POST_FAVORITE_CHARACTERS,
  GET_FAVORITES,
  LOGIN_USER,
  GET_PLANS,
  CREATE_USER,
  POST_COMICS,
  GET_CREATORS,
  GET_USER_DATA,
  SET_USER_DATA,
  GET_ADMIN,
  FILT_BY_STATS,
} from "../Actions/actions";
import {
  FILT_BY_CHARACTER,
  FILT_BY_CREATOR,
} from "../Actions/FilterOrderActions";

const initialState = {
  Comics: [],
  copyComics: [],
  selectedComic: [],
  users: [],
  loginUser: {},
  copyUsers: [],
  authenticated: false,
  filter: false,
  favoritesComics: [],
  favoritesCharacters: [],
  plans: [],
  user: {
    nickname: null,
    name: null,
    picture: null,
    updated_at: null,
    email: null,
    email_verified: null,
    sub: null,
    plan_id: null,
    payment: false,
    role: null,
  },
  creators: [],
};

function ComicsReducer(state = initialState, { type, payload }) {
  // eslint-disable-next-line default-case
  switch (type) {
    case GET_TITLE:
      let comicss = [...state.Comics];
      let filtComic = comicss?.filter((comic) =>
        comic.title.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        copyComics: filtComic,
      };

    case GET_BY_ID: {
      return {
        ...state,
        selectedComic: payload,
      };
    }
    case GET_COMICS:
      return {
        ...state,
        Comics: payload,
        copyComics: payload,
      };
    case FILT_BY_CHARACTER:
      return {
        ...state,
        copyComics: [],
      };
    case FILT_BY_CREATOR:
      console.log(payload);

      return {
        ...state,
        filter: true,
        copyComics: payload,
      };
    case GET_PLANS:
      return {
        ...state,
        plans: payload,
      };
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        copyUsers: payload,
      };
    case GET_ADMIN:
        console.log('admin reducer', payload)
        return {
          ...state,
          user: payload,
      };
    case UPDATE_COMIC:
      const comicEdit = state.Comics.findIndex((c) => c.id === type.payload.id);
      state.Comics[comicEdit] = type.payload;
      console.log(comicEdit);
      return {
        ...state,
        copyComics: [...state.Comics],
      };
    case DELETE_COMIC:
      let deletedComic = state.Comics.filter((c) => c.id !== type.payload.id);
      return {
        ...state,
        copyComics: [...deletedComic],
      };
    case LOGIN_USER:
      return {
        ...state,
        user: payload,
        
      };
    case CREATE_USER:
      return {
        ...state,
        user: payload,
      };
    case FILT_BY_PLAN:
      const backUp = [...state.users];
      const filtered = backUp.filter(
        (user) => Number(user.plan_id) === payload
      );
      return {
        ...state,
        copyUsers: filtered,
      };
    case FILT_BY_STATS:
     console.log('EN EL REDUCER FILTER ADMIN, ', payload)
      const backUp2 = state.users;
      const all = backUp2;
      const filtered2 = payload === '' ? all : backUp2.filter((user)=> (new Date(user.createdAt).getMonth()+1) === payload);
      console.log('filtered2', filtered2)
      return {
        ...state,
        copyUsers: filtered2,
      };
      
      
    case CLEAR_COMICS:
      return {
        ...state,
        copyComics: [],
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        selectedComic: [],
      };
    case GET_FAVORITES:
      return {
        ...state,
        favoritesComics: payload,
      };
    case POST_FAVORITE_COMICS:
      console.log("reducer", payload);
      return {
        ...state,
        favoritesComics: payload,
      };
    case POST_FAVORITE_CHARACTERS:
      return { ...state };
    case GET_USER_DATA:
        return {
        ...state,
        user:payload
      }
      case SET_USER_DATA:
      return {
        ...state,
        user: payload.user,
      }
    case POST_COMICS:
      return {
        ...state,
        selectedComic: payload,
      };
    case GET_CREATORS:
      return {
        ...state,
        creators: payload,
      };

    /* case REMOVE_FAVORITE:
            var remove = state.favorites.filter(e => e.id !== payload)
            return{
                ...state,
                favorites: remove
            } */
    default:
      return { ...state };
  }
}
export default ComicsReducer;
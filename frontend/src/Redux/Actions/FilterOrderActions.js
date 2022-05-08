import axios from "axios";
export const GET_CREATORS = "ALL_CREATORS";
export const GET_BY_CREATOR = "GET_BY_CREATOR";
export const FILT_BY_CHARACTER = "FILT_BY_CHARACTER";
export const FILT_BY_CREATOR = "FTLT_BY_CREATOR";
//=======Filtrado por creador=======//

export function getAllCreators() {
  // Obtener todos los Creadores
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/creators/all");
      return dispatch({
        type: GET_CREATORS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getByCreators(id) {
  // Obtener todos los Creadores
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `http://localhost:3001/creators/${id}/comics`
      );
      return dispatch({
        type: FILT_BY_CREATOR,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//======COMICS=====//
export function filtByCharacter(characterName) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILT_BY_CHARACTER,
        payload: characterName,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function filtByCreator(creatorName) {
  return async (dispatch) => {
    try {
      return dispatch({
        type: FILT_BY_CREATOR,
        payload: creatorName,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

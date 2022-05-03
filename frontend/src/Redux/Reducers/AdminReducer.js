import {} from "../Actions/AdminActions" // importar las action types
import {} from "../Actions/AdminActions" // importar las actions



const initialStateOfAdmin = {

}

function AdminReducer(state = initialStateOfAdmin, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type){


        default:
            return{
                ...state
            } 
    }
}

export default AdminReducer
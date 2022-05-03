 import react, {useState,useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"

import Loading from "../../Loading/Loading"
import {getAllCreators} from "../../../Redux/Actions/FilterOrderActions"

import "./CharacterFilterOrd.css"

const CharacterFiltOrd = ( )=>{
     const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const [autors,setAutors] =useState([])
    const [name,setName] = useState("")


    let creators = useSelector(state => state.CharactersReducer.creators)
    console.log("componente", creators)

    useEffect(()=>{
        dispatch(getAllCreators())
        setLoading(false)
    },[dispatch])
    
    



    //===Filter por autor===//
    const onChange = (e)=>{
        setName(e.target.value)
        dispatch()
    }

    const filtByCreator = (creator)=>{
        /* dispatch() */
    }
    const buttons = autors?
        autors.map(creator=>{
            console.log(creator)
            return <button className="Autor" key={creator.id} onClick={filtByCreator(creator.firstName)}>
                {`${creator.firstName} ${creator.lastName}`}
                </button>
        }):null
    
    


    return (<div className="CharacterFiltOrd">
        {loading?
        <Loading/>
        :<div>
        <div className="Filters">
            <div className="Autores">
            <div><input value={name} onChange={(q)=>{onChange(q)}} name="BuscarAutor"/></div>
            <div children="Autores_Hidden">
                <div className="Autores_Scroll">
                    {buttons} 
                </div>
            </div>
            </div>
            
        </div>
        <div className="Orders">
            order
        </div>
        </div>
        }
    </div>) 
}


export default CharacterFiltOrd 
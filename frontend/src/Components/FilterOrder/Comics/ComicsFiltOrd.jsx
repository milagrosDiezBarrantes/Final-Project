import react, {useState,useEffect} from "react"
import { useSelector,useDispatch} from "react-redux"

import Loading from "../../Loading/Loading"
import {getAllCreators} from "../../../Redux/Actions/FilterOrderActions"
import { filtByCreator } from "../../../Redux/Actions/FilterOrderActions"

import "./ComicsFilterOrd.css"

const ComicsFiltOrd = ( )=>{
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const [Creators,setCreators] =useState([])
    const [CreatorName,setCreatorName] = useState("")


    let state = useSelector(state => state.CharactersReducer.creators)
        

    useEffect(()=>{
        setLoading(true)
        dispatch(getAllCreators())
        setLoading(false)
    },[dispatch])
    
    useEffect(()=>{
        setCreators(state)
    },[state]) 



    //===Filter por autor===//
    const inputOnChange = (e)=>{
        e.preventdefault()
        setCreatorName(e.target.value)
        
    }

    const cfiltByCreator = (creator)=>{
        dispatch(filtByCreator(creator)) 
    }
    const buttons = Creators?
        Creators.map(creator=>{
            return <button className="Autor" key={creator.id} onClick={()=>{cfiltByCreator(creator.fullName)}}>
                {creator.fullName}
                </button>
        }):null
   
    


    return (<div className="CharacterFiltOrd">
        {loading?
        <Loading/>
        :
        <div>
        <div className="Filters">
            <div className="Autores">
            {/* <div><input value={CreatorName} onChange={(q)=>{onChange(q)}} name="BuscarAutor"/></div> */}
                <div children="Autores_Hidden">
                    <h4 className="filcreator">Filter For Creator</h4>
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


export default ComicsFiltOrd
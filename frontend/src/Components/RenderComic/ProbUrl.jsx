import React from "react"
import { useState } from "react"


const ProbUrl= ()=>{
    const [url,setUrl] = useState("")

    const onChange = (e)=>{
        setUrl(e.target.value)
    }
    return <div>
        
            <input type="text" onChange={onChange} name = "url" value ={url}></input>

       
        <embed className="UrlProb" height={2000} type="application/pdf" src={url} data={url}></embed> 
    </div>
}



export default ProbUrl
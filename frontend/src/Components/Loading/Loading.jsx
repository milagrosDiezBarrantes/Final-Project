import React from "react";
import varios from "../../Img/Loading/varios_icons.gif"
import "./Loading.css"


const Loading = () => {
     
    return (
        <div  className="Contenedor_de_carga" >
            <div className="Girar">
                <div className="CambiarColor">
                        {<img className="img" src={varios}/>}
                </div>
            </div>
        </div>
    )
}
export default Loading
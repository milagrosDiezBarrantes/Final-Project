<<<<<<< joel_b
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> main
import varios from "../../Img/Loading/varios_icons.gif"
import "./Loading.css"


const Loading = () => {
<<<<<<< joel_b
     
=======
    const [img, setImg] = useState([varios])
    var [num, setNum] = useState(0) 
>>>>>>> main
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
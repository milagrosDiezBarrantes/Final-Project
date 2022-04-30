import React, { useEffect, useState } from "react";
// import "./Loading.css"
import spider from "../../Img/Loading/spaider.gif"
import iron from "../../Img/Loading/ironman2.webp"
import varios from "../../Img/Loading/varios_icons.gif"


const Loading = () => {
    const [img, setImg] = useState([varios, iron,])
    var [num, setNum] = useState(0)

    const cambio = () => {
        setTimeout(() => {
            if (num = img.length - 1) {
                setNum(0)
                console.log(num)
            } else if (num < img.length - 1) {
                setNum(...num + 1)
                console.log(num)
            }

        }, 1000)

    }
    useEffect(() => {
        cambio()
    }, [num])
    return (

        <div  >
            <div >
                <div >
                    {<img src={varios} />}
                </div>
            </div>
        </div>

    )
}



export default Loading
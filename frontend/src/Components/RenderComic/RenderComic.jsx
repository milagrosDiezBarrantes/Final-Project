import React, {useState} from "react"
import {useParams} from "react-dom"
import LazyTrending from "../Lazytrending/LazyTrending";
import {Document,Page} from "react-pdf/dist/esm/entry.webpack"
import "./ReadComic.css"
import axios from "axios";
import { useEffect } from "react";



const RenderComic = ({url})=>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber,setPageNumber] = useState(1); 
    const onDocumentLoadSuccess=({numPages})=>{
        setNumPages(numPages);
        setPageNumber(1);
    }

    const alto = (i)=>{
        let a = 1000*i
        return `${a}`
    }

    return (
        <div className="ContainerReadComic">
            <center>
                {/* <embed className="sapeeee" height={alto(pages)} type="application/pdf" src={url} data={url}/> */}
                    {url ==="Alerta Roja "?<div>Este comics se encuentra en camino... Disponible en {Math.floor(Math.random()*31)} dias</div>
                    :   <div> 
                            <Document src={url} file={url} onLoadSuccess={onDocumentLoadSuccess}>
                                {Array.from(
                                    new Array(numPages),
                                    (el,index) => (
                                        <LazyTrending component={
                                            <Page 
                                                height="1000"
                                                key={`page_${index+1}`}
                                                pageNumber={index+1}
                                            />
                                        }/>
                                )
                                )}
                            </Document>
                        </div>
                    }
            </center>
        </div> 
    )
}

export default RenderComic
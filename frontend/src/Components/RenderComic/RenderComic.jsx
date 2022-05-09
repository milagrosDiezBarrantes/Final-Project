import React, {useState} from "react"
import {Document,Page} from "react-pdf/dist/esm/entry.webpack"

const RenderComic = ({comic})=>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber,setPageNumber] = useState(1);

    const onDocumentLoadSuccess=({numPages})=>{
        setNumPages(numPages);
        setPageNumber(1);
    }


    return (
        <div className="ContainerReadComic">
          
            <center>
                <div> 
                    <Document file = {comic} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(
                            new Array(numPages),
                            (el,index) => (
                                <Page 
                                    height="1000"
                                    key={`page_${index+1}`}
                                    pageNumber={index+1}
                                />
                        )
                        )}
                    </Document>
                </div>
            </center>
        </div>
    )
}

export default RenderComic
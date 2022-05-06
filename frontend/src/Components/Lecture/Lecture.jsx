import React from 'react';
import otroComic from '../../Img/QpdMNOp8gaX.pdf'

const Lecture = () => {
        return (
            <div style = {{position: 'absolute', width: '100%', height: '100%'}}>
                <object type="application/pdf"
                    data= {otroComic}
                    width= "100%"
                    height= "100%"
                >
                </object>
            </div>
            
            );
}

export default Lecture;
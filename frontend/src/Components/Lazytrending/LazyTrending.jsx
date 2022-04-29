import react, {useEffect, useState, useRef} from "react"




const LazyTrending = ({component})=>{

    const [show, setShow]= useState(false);
    const elementRef = useRef()
    

    useEffect(()=>{
        const onChange = (entries,observer)=>{
            console.log(entries)
        const q = entries[0 ]
         if(q.isIntersecting){
             setShow(true)
             observer.disconnect()
         }
        }
        const observer = new IntersectionObserver(onChange,{
            rootMargin: "100px"
        })
        observer.observe(elementRef.current)
        return ()=> observer.disconnect()
    })
    
    return <div ref={elementRef}>
        {show? component:null}
    </div>



}
















export default LazyTrending
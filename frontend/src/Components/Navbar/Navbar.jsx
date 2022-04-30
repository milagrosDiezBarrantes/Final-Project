import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }


  return (
    <>
    </>
  )
}


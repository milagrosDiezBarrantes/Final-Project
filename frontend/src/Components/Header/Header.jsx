import React from "react";

const Header = () => {
  return (
    <header>
    <div className="header--logo">
      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="Header"
        />
      </a>
    </div>
    <div className="header--user">
      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Usuario"
        />
      </a>
    </div>
  </header>
  )
 }

 export default Header
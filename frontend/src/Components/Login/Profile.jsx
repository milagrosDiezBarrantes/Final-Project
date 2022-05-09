import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react";
import './style.css';
import { useSelector } from "react-redux";

export const Profile = () => {
  const profileUser = useSelector(state => state.CharactersReducer.loginUser);
  console.log(profileUser);


  return (
      
      <div className="container">
         <div className="details_container">
         <h1 className="">User Name:</h1>
        <h2 className="">{profileUser.userName}</h2>
         <div className="header">
         <ProfileImage src={profileUser.picture} alt={profileUser.fistName}  />
        <div className=""></div>
        <Button className="button">
          <Link to="/editProfile">
            <span>Edit Profile</span>
          </Link>
        </Button>
        <Button className="button">
          <Link to="/homeComics">
            <span>HOME</span>
          </Link>
        </Button>
        {/*<h3 className="">Name:</h3>

        comentado para muestra viernes <h4 className="">{profileUser.name}</h4>
        <p className="">Email: {profileUser.email}</p> */}
        </div>
        </div>
        </div>
      
    )}
  


const ProfileImage = styled.img` 
position: relative;
height: 80%;
margin: 0 auto;
border-radius: 50%;
-moz-border-radius: 50%;
-webkit-border-radius: 50%;
border: 3px solid #81adf8;
`;

export default Profile;
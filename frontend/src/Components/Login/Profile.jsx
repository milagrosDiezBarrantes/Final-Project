import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react";
import './style.css';


export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      
      <div className="container">
         <div className="details_container">
         <h1 className="">User Name:</h1>
        <h2 className="">{user.userName}</h2>
         <div className="header">
         <ProfileImage src={user.picture} alt={user.fistName}  />
        <div className=""></div>
        <Button className="button">
          <Link to="/editProfile">
            <span>Edit Profile</span>
          </Link>
        </Button>
        
        {/*<h3 className="">Name:</h3>

        comentado para muestra viernes <h4 className="">{user.name}</h4>
        <p className="">Email: {user.email}</p> */}
        </div>
        </div>
        </div>
      
    ))}
  


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
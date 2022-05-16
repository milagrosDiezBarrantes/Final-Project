import React from "react";
import { Image } from "semantic-ui-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  const login = useSelector((state) => state);
  const logged = login.ComicsReducer.user;

  const navigate = useNavigate();

  return !logged.email ? (
    <Loading />
  ) : (
    <div>
      <Navbar />

      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <Image src={logged.picture} size="medium" circular />
        </div>
        <div className="col-md text-center text-md-left">
          <p className="lead text-muted">{logged.email}</p>
          <h2>Welcome {logged.name}!</h2>

          <br />
          <br />
          <h2>Nickname: {logged.nickname}</h2>
          <h2>Plan:{logged.plan_id}</h2>
          <h2>Billing: {logged.payment}</h2>
        </div>
      </div>
      <div className="row">
        {/* <pre className="col-12 text-light bg-dark p-4">
              {JSON.stringify(user, null, 2)}
            </pre>  */}
      </div>
      <br />
      <br />
      <button
        onClick={() => navigate("/profile/edit")}
        className="btn btn-primary btn-block"
      >
        Edit{" "}
      </button>

      <button
        className="btn btn-primary btn-block"
        onClick={() => navigate("/homeComics")}
      >
        Go back
      </button>
    </div>
  );
};
export default withAuthenticationRequired(Profile, {
  onRedirecting: () => (
    <div>
      Acces not allowed, taking you to log in <Loading />
    </div>
  ),
});

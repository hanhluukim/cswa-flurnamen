import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

//Die Seite wurde nur genutzt, um Einloggen zu checken
const Profile = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  //wenn currentUser gelöscht wird, redirect to Anmeldung
  //Information von Nutzern currentUser id, email, role wurden aus dem lokalStrage gespeichert.

  if (!currentUser) {
    return <Redirect to="/anmeldung" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
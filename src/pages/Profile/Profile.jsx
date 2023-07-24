import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { getUserInfo } from "../../utils/UserUtils";

function Profile() {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { username } = useParams();

  const currentUser = [...dataState?.users].find((user) => user.username === username)

  console.log(currentUser);

  return <div>Profile</div>;
}

export default Profile;

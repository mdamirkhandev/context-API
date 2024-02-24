import { useContext } from "react";
import userContext from "../context/UserContext";
export const Profile = () => {
  const { user } = useContext(userContext);
  if (!user) {
    return (
      <div>
        <h2>Profile</h2>
        <p>You are not logged in</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Profile</h2>
        <p>Welcome {user.username}</p>
      </div>
    );
  }
};

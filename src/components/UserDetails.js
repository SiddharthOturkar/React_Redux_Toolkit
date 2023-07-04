// import DeleteAllUsers from "./DeleteAllUsers";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import DisplayUsers from "./DisplayUsers";
import DeleteAll from "./DeleteAll";

function UserDetails() {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  return (
    <div>
      <h1> Store Concept starting from here </h1>
      <div>
        <div> List if user details </div>
        <button onClick={() => addNewUser(fakeUserData())}>
          {" "}
          Add new users{" "}
        </button>
      </div>
      <ul>
        <DisplayUsers />
      </ul>
      <hr />
      {/* <DeleteAllUsers /> */}
      <DeleteAll />
    </div>
  );
}
export default UserDetails;

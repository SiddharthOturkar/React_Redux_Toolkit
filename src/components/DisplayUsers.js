import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/all.js";
import { removeUser } from "../store/slices/userSlice";
function DisplayUsers(params) {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  console.log(data);
  return (
    <div>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default DisplayUsers;

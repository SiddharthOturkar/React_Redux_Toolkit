import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/userSlice";

function DeleteAll() {
  const dispatch = useDispatch();

  const deletedata = () => {
    dispatch(deleteUsers());
  };

  return (
    <div>
      <button onClick={() => deletedata()}> Delete All Users Data </button>
    </div>
  );
}

export default DeleteAll;

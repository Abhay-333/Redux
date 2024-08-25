import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/reducers/UserReducer";

function Users() {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.userReducer);
  
  const deleteHandler = (id)=>{
    dispatch(deleteUser(id)) 
  }

  return (
    <div className="bg-zinc-900 min-h-screen w-full text-white">
      <div className="mx-auto w-[80%] flex min-h-fit flex-col gap-5">
        <h1 className="text-5xl py-5">User List</h1>
        {users && users.map((user,index) => {
          return (
            <div key={index} className="flex items-center w-[20%] justify-between ">
              <h1 className="capitalize" key={user.id}>
                {user.name.firstname} {user.name.lastname}
              </h1>
              <span onClick={()=>deleteHandler(user.id)} className="cursor-pointer px-3 py-2 rounded-md bg-red-500">X</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;

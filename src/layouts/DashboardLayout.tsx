import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { logoutUser } from "../features/user/userSlice";

const DashboardLayout = () => {
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="w-full p-4 bg-red-500">
        <h2>DASHBOARD LAYOUT HERE</h2>
        {user ? (
          <div>
            <h3>Welcome back, {user.username} </h3>
            <button onClick={() => dispatch(logoutUser())} type="button">Press me to logout</button>
          </div>
        ) : (
          <h3>You are not authenticated</h3>
      
        )}
      </div>
      <Outlet />
    </>
  );
};
export default DashboardLayout;

import { Outlet, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { logoutUser } from "../features/user/userSlice";
import { useEffect, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import LoadingBar from "react-top-loading-bar";

TopBarProgress.config({
  barColors: {
    "0": "#00ff39",
    "1.0": "#00ff39",
  },
  shadowBlur: 5,
});

const DashboardLayout = () => {
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(0);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setLoading(30);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
   setLoading(100);
  }, [prevLoc]);

  return (
    <>
      <LoadingBar progress={loading} color="#00ff39" />
      <div className="w-full p-4 bg-red-500">
        <h2>DASHBOARD LAYOUT HERE</h2>
        {user ? (
          <div>
            <h3>Welcome back, {user.username} </h3>
            <button onClick={() => dispatch(logoutUser())} type="button">
              Press me to logout
            </button>
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

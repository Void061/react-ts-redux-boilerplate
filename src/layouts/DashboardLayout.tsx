import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="w-full p-4 bg-red-500">
        <h2>DASHBOARD LAYOUT HERE</h2>
      </div>
      <Outlet />
    </>
  );
};
export default DashboardLayout;

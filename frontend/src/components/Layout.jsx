import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full container bg-gray-100 mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;

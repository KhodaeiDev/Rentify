import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full mx-auto max-w-[1440px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-center w-full mx-auto max-w-[1440px] bg-primary-tint-6">
      <Outlet />
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full max-w-[1440px] bg-neutral-tint-6">
      <Outlet />
    </div>
  );
};

export default Layout;

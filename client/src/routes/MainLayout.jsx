import Leftbar from "../components/Leftbar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="app flex gap-4 w-full">
      <Leftbar />
      <div className="content flex-1 mr-4">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

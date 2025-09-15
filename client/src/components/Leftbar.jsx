import { Link } from "react-router";

const Leftbar = () => {
  return (
    <div className="leftbar flex flex-col justify-between h-[100vh] items-center sticky top-0 w-[72px] py-2.5 px-0 border-r  border-gray-300 ">
      <div className="menuicons flex flex-col items-center gap-6">
        <Link to="/" className="menuIcon">
          <img src="/general/logo.svg" alt="" className="logo w-6 h-6" />
        </Link>
        <Link to="/" className="menuIcon">
          <img src="/general/home.svg" alt="" />
        </Link>
        <Link to="/create" className="menuIcon">
          <img src="/general/create.svg" alt="" />
        </Link>
        <Link to="/updates" className="menuIcon">
          <img src="/general/updates.svg" alt="" />
        </Link>
        <Link to="/messages" className="menuIcon">
          <img src="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/settings" className="menuIcon">
        <img src="/general/settings.svg" alt="" />
      </Link>
    </div>
  );
};

export default Leftbar;

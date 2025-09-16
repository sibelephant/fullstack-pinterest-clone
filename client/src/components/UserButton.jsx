import { useState } from "react";
import {Link} from "react-router";

const UserButton = () => {
  //temp user info
  const currentUser = true;

  const [open, setOpen] = useState(false);
  return currentUser ? (
    <div className="userButton md:flex items-center gap-4 relative hidden">
      <img
        src="/general/noAvatar.png"
        alt=""
        className="w-9 h-9 border-[100%] object-cover"
      />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt=""
        className="w-4 h-4 border-[100%] object-cover cursor-pointer"
      />
      {open && (
        <div className="userOptions absolute right-0 top-[100%] p-2 rounded-[8px] bg-white z-99 flex flex-col text-sm shadow cursor-pointer">
          <div className="p-2 rounded-[8px] hover:bg-[#f1f1f1] text-gray-600">
            <Link to={`/khalid`}>Profile</Link>
          </div>
          <div className="p-2 rounded-[8px] hover:bg-[#f1f1f1] text-gray-600">
            Settings
          </div>
          <div className="p-2 rounded-[8px] hover:bg-[#f1f1f1] text-gray-600">
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <a
      href="/"
      className="loginLink text-[18px] p-4 rounded-[32px] hover:bg-[#f1f1f1]"
    >
      Login /Sign up
    </a>
  );
};

export default UserButton;

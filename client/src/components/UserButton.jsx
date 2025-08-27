import { useState } from "react";

const UserButton = () => {
  //temp user info
  const currentUser = true;

  const [open, setOpen] = useState(false);
  return currentUser ? (
    <div className="userButton flex items-center gap-4">
      <img
        src="/general/noAvatar.png"
        alt=""
        className="w-9 h-9 border-[100%] object-cover"
      />
      <img
        src="/general/arrow.svg"
        alt=""
        className="w-4 h-4 border-[100%] object-cover cursor-pointer"
      />
      <div className="userOptions">
        <div className="">Profile</div>
        <div className="">Settings</div>
        <div className="">Logout</div>
      </div>
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

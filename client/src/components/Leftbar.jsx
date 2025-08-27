const Leftbar = () => {
  return (
    <div className="leftbar flex flex-col justify-between h-[100vh] items-center sticky top-0 w-[72px] py-2.5 px-0 border-r  border-gray-300 ">
      <div className="menuicons flex flex-col items-center gap-6">
        <a href="/" className="menuIcon">
          <img src="/general/logo.png" alt="" className="logo w-6 h-6" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/home.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <img src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default Leftbar;

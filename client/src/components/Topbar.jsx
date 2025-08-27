import UserButton from "./UserButton";

const Topbar = () => {
  return (
    <div className="topbar mx-4 my-0 flex items-center gap-4">
      {/* SEARCH */}
      <div className="search flex-1 bg-[#f1f1f1] rounded-2xl p-4 flex items-center gap-4  ">
        <img src="/general/search.svg" alt="" />
        <input
          type="text"
          placeholder="search"
          className="flex-1 bg-transparent border-none outline-none text-[18px]"
        />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default Topbar;

import Image from "./Image";

const PostInteractions = () => {
  return (
    <div className="postInteractions flex items-center justify-between ">
      <div className="interactionIcons flex items-center gap-2 font-medium">
        <Image path={"/Pinterest-clone/general/react.svg"} />
        275
        <Image path={"/Pinterest-clone/general/share.svg"} />
        <Image path={"/Pinterest-clone/general/more.svg"} />
      </div>
      <button className="bg-[#e50829] text-white border-none rounded-[24px] p-4 font-bold cursor-pointer">
        Save
      </button>
    </div>
  );
};

export default PostInteractions;

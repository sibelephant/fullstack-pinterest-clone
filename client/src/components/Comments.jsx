import { useState } from "react";
import Image from "./Image";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments flex-1 flex flex-col gap-4  min-h-0">
      <div className="commnetList flex-1 flex-col gap-4 overflow-y-auto">
        <span className="commentCount">5 comments</span>
        {/* COMMENT */}
        <div className="comment flex gap-4">
          <Image
            path={`/Pinterest-clone/general/noAvatar.png`}
            alt={""}
            className={`w-8 h-8 rounded-[50%] object-cover`}
          />
          <div className="commentContent flex flex-col gap-1">
            <span className="commentUsername font-medium text-[14px]">
              Fred Jones
            </span>
            <p className="commnetText text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              molestiae tenetur ullam aliquid minima ad sunt quidem dolorem
              consequuntur omnis similique magni!
            </p>
            <span className="commentTime text-[12px] text-[#a6a6a6]">1h</span>
          </div>
        </div>

        <div className="comment flex gap-4">
          <Image
            path={`/Pinterest-clone/general/noAvatar.png`}
            alt={""}
            className={`w-8 h-8 rounded-[50%]  object-cover`}
          />
          <div className="commentContent flex flex-col gap-1">
            <span className="commentUsername font-medium text-[14px]">
              Fred Jones
            </span>
            <p className="commnetText text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              molestiae tenetur ullam aliquid minima ad sunt quidem dolorem
              consequuntur omnis similique magni!
            </p>
            <span className="commentTime text-[12px] text-[#a6a6a6]">1h</span>
          </div>
        </div>

        <div className="comment flex gap-4">
          <Image
            path={`/Pinterest-clone/general/noAvatar.png`}
            alt={""}
            className={`w-8 h-8 rounded-[50%]  object-cover`}
          />
          <div className="commentContent flex flex-col gap-1">
            <span className="commentUsername font-medium text-[14px]">
              Fred Jones
            </span>
            <p className="commnetText text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              molestiae tenetur ullam aliquid minima ad sunt quidem dolorem
              consequuntur omnis similique magni!
            </p>
            <span className="commentTime text-[12px] text-[#a6a6a6]">1h</span>
          </div>
        </div>
      </div>
      <form className="commentForm bg-[#f1f1f1] p-4 rounded-[32px] flex items-center gap-4">
        <input
          type="text"
          placeholder="Add a comment"
          className="flex-1 border-none outline-none bg-transparent text-[16px] "
        />
        <div className="emoji cursor-pointer text-[20px] relative">
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className="emojiPicker absolute right-0 bottom-[50px]">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;

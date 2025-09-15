import Comments from "../components/Comments";
import Image from "../components/Image";
import PostInteractions from "../components/PostInteractions";
import { Link } from "react-router";

const PostPage = () => {
  return (
    <div className="postPage flex justify-center gap-8">
      <svg
        height={`20`}
        viewBox="0 0 24 24"
        width={`20`}
        style={{ cursor: "pointer" }}
        fill="currentColor"
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
      <div className="postContainer w-full mr-4 lg:w-[70%] lg:mr-0 flex flex-col md:flex-row border border-solid border-[#e9e9e9] rounded-[32px] overflow-hidden max-h-[820px]">
        <div className="postImage flex-1  bg-[#c8a68c]">
          <Image
            path={`/Pinterest-clone/pins/pin1.jpeg`}
            alt={``}
            w={736}
            className={`w-[100%] h-[100%] object-cover`}
          />
        </div>
        <div className="postDetails flex-1 h-[100%] flex flex-col gap-8 p-4 overflow-hidden">
          <PostInteractions />
          <Link to={`/john`} className="postUser flex items-center gap-2">
            <Image
              path={`/Pinterest-clone/general/noAvatar.png`}
              alt={``}
              className={`w-8 h-8 rounded-[50%]`}
            />
            <span className="text-[14px]">Khalid Ibrahim</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

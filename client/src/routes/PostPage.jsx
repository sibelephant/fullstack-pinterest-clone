import Comments from "../components/Comments";
import Image from "../components/Image";

import { Link } from "react-router";

const PostPage = () => {
  return (
    <div className="postPage flex justify-center gap-8 px-4 md:px-6 lg:px-0 mt-2">
      <div className="postContainer w-full mr-4 lg:w-[70%] lg:mr-0 flex flex-col md:flex-row bg-white border border-solid border-[#e9e9e9] rounded-[32px] overflow-hidden">
        {/* Left: Image */}
        <div className="postImage relative flex-1 bg-[#f1f1f1] min-h-[320px]">
          {/* Back button overlay */}
          <a
            href="/"
            className="absolute top-3 left-3 z-10 rounded-full bg-white p-2 shadow hover:bg-gray-100"
            aria-label="Back"
          >
            <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </a>
          <Image
            path={`/Pinterest-clone/pins/pin1.jpeg`}
            alt={`Pin`}
            w={736}
            className={`w-full h-full object-cover`}
          />
        </div>

        {/* Right: Details */}
        <div className="postDetails flex-1 flex flex-col gap-6 p-4 md:p-6">
          {/* Header actions */}
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="rounded-full px-3 py-2 text-sm hover:bg-gray-100"
            >
              Visit
            </a>
            <div className="flex items-center gap-2">
              <button
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Share"
              >
                <img src="/general/share.svg" alt="share" />
              </button>
              <button
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="More"
              >
                <img src="/general/more.svg" alt="more" />
              </button>
              <button className="ml-1 bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2 text-sm font-semibold">
                Save
              </button>
            </div>
          </div>

          {/* Title & description */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
              Beautiful Workspace Inspiration
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Minimal desk setup with warm tones and natural light. Saved for
              workspace ideas and productivity inspiration.
            </p>
          </div>

          {/* User */}
          <Link to={`/john`} className="postUser flex items-center gap-2">
            <Image
              path={`/Pinterest-clone/general/noAvatar.png`}
              alt={`User avatar`}
              className={`w-8 h-8 rounded-[50%]`}
            />
            <span className="text-[14px]">Khalid Ibrahim</span>
          </Link>

          {/* Interactions */}
          {/* <PostInteractions /> */}

          {/* Comments */}
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

import Image from "../components/Image";
import { useState } from "react";

const mockPins = [
  { id: 1, media: "/Pinterest-clone/pins/pin1.jpeg", height: 320 },
  { id: 2, media: "/Pinterest-clone/pins/pin2.jpeg", height: 260 },
  { id: 3, media: "/Pinterest-clone/pins/pin3.jpeg", height: 380 },
  { id: 4, media: "/Pinterest-clone/pins/pin4.jpeg", height: 300 },
  { id: 5, media: "/Pinterest-clone/pins/pin5.jpeg", height: 340 },
  { id: 6, media: "/Pinterest-clone/pins/pin6.jpeg", height: 280 },
  { id: 7, media: "/Pinterest-clone/pins/pin7.jpeg", height: 360 },
  { id: 8, media: "/Pinterest-clone/pins/pin8.jpeg", height: 300 },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("saved");
  return (
    <div className="profilePage w-full max-w-[1128px] mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="header flex flex-col items-center gap-4 py-8">
        <Image
          path="/Pinterest-clone/general/noAvatar.png"
          alt="Avatar"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
        />
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">Khalid Ibrahim</h1>
          <div className="text-gray-500">@john</div>
        </div>
        <div className="stats flex items-center gap-4 text-sm text-gray-600">
          <span>
            <strong>124</strong> followers
          </span>
          <span>•</span>
          <span>
            <strong>87</strong> following
          </span>
        </div>
        <div className="actions flex items-center gap-2">
          <button className="rounded-full px-4 py-2 text-sm hover:bg-gray-100">
            Share
          </button>
          <button className="rounded-full px-4 py-2 text-sm hover:bg-gray-100">
            Edit profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs sticky top-[64px] bg-white z-10">
        <div className="flex items-center justify-center gap-6 border-b border-gray-200">
          {[
            { key: "saved", label: "Saved" },
            { key: "created", label: "Created" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-3 py-3 text-sm md:text-base relative ${
                activeTab === t.key
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {t.label}
              {activeTab === t.key && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-black" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="gridSection py-6">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 [column-fill:_balance]">
          {/* Masonry via CSS columns */}
          {mockPins.map((p) => (
            <div
              key={p.id}
              className="mb-4 break-inside-avoid rounded-2xl overflow-hidden"
            >
              <Image
                path={p.media}
                alt="Pin"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

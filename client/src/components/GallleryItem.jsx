import { Link } from "react-router";
import Image from "./Image";

const GallleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem group relative flex"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image path={item.media} alt={""} w={372} h={optimizedHeight} className={`w-full rounded-[16px] object-cover`} />

      {/* Clickable overlay */}
      <Link
        to={`/pin/${item.id}`}
        className="absolute inset-0 rounded-[16px] bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-10
                   pointer-events-none group-hover:pointer-events-auto"
      />

      {/* Save button */}
      <button
        className="saveButton absolute top-2 right-2 z-20 px-3 py-1 rounded-full bg-red-600 text-white text-sm
                   opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        Save
      </button>

      {/* Overlay icons */}
      <div
        className="overlayIcons absolute bottom-2 left-2 z-20 flex gap-2
                   opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <button className="p-2 rounded-full bg-white/90">
          <img src="/general/share.svg" alt="share" />
        </button>
        <button className="p-2 rounded-full bg-white/90">
          <img src="/general/more.svg" alt="share" />
        </button>
      </div>
    </div>
  );
};

export default GallleryItem;

import { useRef, useState } from "react";
import ImageUploader from "../components/ImageUploader";
import TagInput from "../components/TagInput";

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [board, setBoard] = useState("all");
  // Tags
  const [topics, setTopics] = useState([]);
  const [products, setProducts] = useState([]);
  const inputRef = useRef(null);

  const onSelectFile = (f) => {
    if (!f) return;
    if (!f.type.startsWith("image/")) return;
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  };

  const clearImage = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const canSave = Boolean(title.trim() && (preview || file));

  // Tag input handled by TagInput component

  return (
    <div className="createPage flex justify-center px-4 md:px-6 lg:px-0 mt-2">
      <div className="w-full mr-4 lg:w-[70%] lg:mr-0 flex flex-col md:flex-row bg-[#f5f5f5] border border-solid border-[#e9e9e9] rounded-[32px] overflow-hidden">
        {/* Left: Upload */}
        <div className="flex-1 p-4 md:p-6">
          <ImageUploader
            preview={preview}
            onSelectFile={onSelectFile}
            onClear={clearImage}
          />
        </div>

        {/* Right: Form */}
        <div className="flex-1 p-4 md:p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            {/* Board select + Save */}
            <div className="flex items-center gap-2">
              <select
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="rounded-full border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="all">Select board</option>
                <option value="workspace">Workspace</option>
                <option value="recipes">Recipes</option>
              </select>
            </div>
            <button
              disabled={!canSave}
              className={`ml-auto rounded-full px-4 py-2 text-sm font-semibold text-white ${
                canSave
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-red-300 cursor-not-allowed"
              }`}
            >
              Save
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600" htmlFor="pin-title">
              Title
            </label>
            <input
              id="pin-title"
              type="text"
              placeholder="Add your title"
              className="text-2xl md:text-3xl font-semibold outline-none placeholder-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600" htmlFor="pin-description">
              Description
            </label>
            <textarea
              id="pin-description"
              placeholder="Tell everyone what your Pin is about"
              className="min-h-[120px] outline-none placeholder-gray-400"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600" htmlFor="pin-link">
              Link
            </label>
            <input
              id="pin-link"
              type="url"
              placeholder="Add a destination link"
              className="outline-none placeholder-gray-400"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          {/* Topics */}
          <TagInput
            label="Topics"
            tags={topics}
            setTags={setTopics}
            placeholder="Add a topic and press Enter"
          />

          {/* Products */}
          <TagInput
            label="Products"
            tags={products}
            setTags={setProducts}
            placeholder="Add a product and press Enter"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;

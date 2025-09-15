import { useRef } from "react";

const ImageUploader = ({ preview, onSelectFile, onClear }) => {
  const inputRef = useRef(null);

  const handleInput = (e) => onSelectFile(e.target.files?.[0]);
  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    onSelectFile(f);
  };
  const onDragOver = (e) => e.preventDefault();

  if (!preview) {
    return (
      <div
        className="h-full min-h-[360px] rounded-3xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-3 text-center px-6"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <img src="/general/upload.svg" alt="upload" />
        <div className="text-sm text-gray-600">
          Drag and drop or click to upload
        </div>
        <button
          className="mt-2 rounded-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200"
          onClick={() => inputRef.current?.click()}
        >
          Choose file
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInput}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <img
        src={preview}
        alt="preview"
        className="w-full max-h-[70vh] object-contain rounded-3xl"
      />
      <div className="absolute top-3 right-3 flex gap-2">
        <button
          className="rounded-full px-3 py-1 bg-white shadow text-sm hover:bg-gray-100"
          onClick={() => inputRef.current?.click()}
        >
          Replace
        </button>
        <button
          className="rounded-full px-3 py-1 bg-white shadow text-sm hover:bg-gray-100"
          onClick={onClear}
        >
          Remove
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleInput}
      />
    </div>
  );
};

export default ImageUploader;

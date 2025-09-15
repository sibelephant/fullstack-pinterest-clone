import React from "react";

const TagInput = ({ label, tags, setTags, placeholder }) => {
  const [value, setValue] = React.useState("");

  const add = () => {
    const v = value.trim();
    if (!v) return;
    if (!tags.includes(v)) setTags((prev) => [...prev, v]);
    setValue("");
  };

  const remove = (t) => setTags((prev) => prev.filter((x) => x !== t));

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {t}
            <button
              type="button"
              className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => remove(t)}
              aria-label={`Remove ${t}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            add();
          }
        }}
        placeholder={placeholder}
        className="rounded-full border border-gray-300 px-3 py-2 text-sm outline-none"
      />
    </div>
  );
};

export default TagInput;

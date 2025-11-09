import React, { useState } from "react";

export default function TweetForm({ onSubmit }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="border rounded w-full p-2"
        rows="3"
        maxLength="280"
        placeholder="Що нового?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Твітнути
      </button>
    </form>
  );
}


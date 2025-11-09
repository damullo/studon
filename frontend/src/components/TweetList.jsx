import React from "react";

export default function TweetList({ tweets }) {
  return (
    <div>
      {tweets.map((t) => (
        <div key={t.id} className="border-b py-2">
          <p className="text-gray-800">{t.content}</p>
          <span className="text-sm text-gray-500">
            {t.user?.username || "анонім"} ·{" "}
            {new Date(t.created_at).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}


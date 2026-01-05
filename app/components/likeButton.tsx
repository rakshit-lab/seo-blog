"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition active:scale-95"
    >
    {likes === 0 ? "Like" : `${likes} Likes`}
    </button>
  );
}
import React, { useEffect, useState } from "react";
import { getTweets, createTweet } from "./api";
import TweetList from "./components/TweetList";
import TweetForm from "./components/TweetForm";

export default function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets().then(setTweets);
  }, []);

  const addTweet = async (content) => {
    const token = localStorage.getItem("token"); // спрощено
    const newTweet = await createTweet(content, token);
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">🐦 Mini Twitter</h1>
      <TweetForm onSubmit={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
}


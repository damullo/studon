import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/";

export const getTweets = async () => {
  const res = await axios.get(API_URL + "tweets/");
  return res.data;
};

export const createTweet = async (content, token) => {
  const res = await axios.post(
    API_URL + "tweets/",
    { content },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};


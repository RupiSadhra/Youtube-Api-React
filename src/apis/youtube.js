import axios from "axios";

const KEY = "AIzaSyDaXjv5W17RkgLqZ7z30Js0_KMpnjNuJaw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

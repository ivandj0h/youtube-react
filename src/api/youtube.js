import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDGGzpc6slNJtqzBNfgNxZB2gkghWfvSi8",
  },
});

// BASE_URLS : https://www.googleapis.com/youtube/v3
// API_KEY   : AIzaSyDGGzpc6slNJtqzBNfgNxZB2gkghWfvSi8
// API_ID    : api-project-569886459615

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.propublica.org",
  headers: { "X-API-Key": "xN4CkJlmc1wGqVJsgPM5fywbvqYygAVRvQCdKRMy" },
});

export default instance;

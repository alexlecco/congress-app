import axios from "axios";

const instance = axios.create({
  baseUrl: "https://api.propublica.org/congress/v1/116/senate/members.json",
  headers: { "X-API-Key": "xN4CkJlmc1wGqVJsgPM5fywbvqYygAVRvQCdKRMy" },
});

export default instance;

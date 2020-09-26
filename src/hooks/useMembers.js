import { useState, useEffect } from "react";
import axios from "../axios";

const useMembers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchMembers = async () => {
    axios
      .request({
        url: "https://api.propublica.org/congress/v1/116/senate/members.json",
        headers: { "X-API-Key": "xN4CkJlmc1wGqVJsgPM5fywbvqYygAVRvQCdKRMy" },
        method: "get",
      })
      .then((response) => {
        const members = response.data.results[0];
        setData([...members.members]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return { loading, data };
};

export default useMembers;

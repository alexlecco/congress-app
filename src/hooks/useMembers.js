import { useState, useEffect } from "react";
import axios from "../axios";

const useMembers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchMembers = async () => {
    axios
      .get("/congress/v1/116/senate/members.json")
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchPosts = () => {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => setUserPosts(data));
  }, [userId]);
  return userPosts;
};

export default useFetchPosts;

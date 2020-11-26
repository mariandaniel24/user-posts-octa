import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import useFetchPosts from "../hooks/useFetchPosts";

const UserDetails = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [userId]);

  const userPosts = useFetchPosts();
  if (!userData) {
    return <div>no user found</div>;
  }

  return (
    <div>
      <UserCard userData={userData} userPosts={userPosts} />
    </div>
  );
};

export default UserDetails;

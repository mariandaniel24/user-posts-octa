import React from "react";
import useFetchPosts from "../hooks/useFetchPosts";
import MUIDataTable from "mui-datatables";
import { Link } from "@material-ui/core";

const columns = [
  {
    name: "userId",
    label: "UserId",
  },
  {
    name: "id",
    label: "Id",
  },
  {
    name: "title",
    label: "Title",
  },
];
const UserPosts = () => {
  const data = useFetchPosts();
  return (
    <div>
      <MUIDataTable title={"Users"} columns={columns} data={data} />
    </div>
  );
};

export default UserPosts;

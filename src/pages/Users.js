import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button, Link } from "@material-ui/core";
import LinkBehavior from "../components/LinkBehavior";

const columns = [
  {
    name: "id",
    label: "Id",
  },
  {
    name: "name",
    label: "Name",
    options: {
      customBodyRender: (value, tableMeta) => {
        const userId = tableMeta.rowData[0];
        return (
          <Link to={`/user/${userId}`} component={LinkBehavior}>
            {value}
          </Link>
        );
      },
    },
  },
  {
    name: "email",
    label: "Email",
    options: {
      search: false,
    },
  },
  {
    name: "username",
    label: "Username",
  },
  {
    name: "id",
    label: "Delete",
    options: {
      customBodyRender: (value, tableMeta) => {
        const userId = tableMeta.rowData[0];
        return (
          <Button to={`/user/${userId}`} component={LinkBehavior}>
            {value}
          </Button>
        );
      },
    },
  },
];

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <MUIDataTable title={"Users"} columns={columns} data={data} />
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Delete from "./Delete";

const Update = (props) => {
  //get id from props
  const { id } = props; //comes from the routes url
  //set state for  form fields
  const [name, setName] = useState("");

  //use useEffect to make the axios get request
  useEffect(() => {
    axios
      .get("http//localhost:8000/api/authors/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Edit Author</h2>
    </div>
  );
};

export default Update;

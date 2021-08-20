import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Delete = (props) => {
  const { authorId, afterDelete } = props;

  const deleteHandler = () => {
    console.log("Delete id:" + authorId);

    axios
      .delete("http://localhost:8000/api/authors/" + authorId)
      .then((res) => {
        console.log("author deleted: ");
        console.log(res.data);
        afterDelete(authorId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button className="delete-btn" onClick={(e) => deleteHandler()}>
      Delete
    </button>
  );
};

export default Delete;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Header from "./Header";

const AllAuthors = (props) => {
  const [allAuthors, setAllAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/")
      .then((res) => {
        console.log(res);
        setAllAuthors(res.data);
      })
      .catch((err) => {
        console.log("there was an error", err);
      });
  }, []);

  return (
    <div>
      <Link to={"/authors/new"}>Add an author</Link>
      <p>We have quotes by:</p>
      <table>
        <tbody>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
          {allAuthors.map((author, idx) => {
            console.log(author.name);

            return (
              <tr key={idx}>
                <td>{author.name}</td>
                <td>
                  <Link to={"/authors/" + author._id}>
                    <button>Edit</button>
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <h2>All Authors</h2> */}
    </div>
  );
};

export default AllAuthors;

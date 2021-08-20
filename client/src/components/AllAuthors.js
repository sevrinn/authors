import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Header from "./Header";
import Delete from "./Delete";

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
  //remove author obj from array after it is successfully deleted from mongoDB server
  const afterDelete = (deletedAuthorId) => {
    let filteredAuthorArray = allAuthors.filter((authorObj) => {
      //if return true, obj becomes part of new array
      //if false, obj is skipped in new array
      return authorObj._id !== deletedAuthorId;
    });
    setAllAuthors(filteredAuthorArray);
  };
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
                  <Delete authorId={author._id} afterDelete={afterDelete} />
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

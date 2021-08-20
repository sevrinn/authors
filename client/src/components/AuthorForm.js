import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const AuthorForm = (props) => {
  //set state for form fields and for errors
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");

  const submitHandler = (e) => {
    //prevent default page refresh
    e.preventDefault();

    //create new author object
    const newAuthor = {
      name,
    };

    //make axios post request
    axios
      .post("http://localhost:8000/api/authors", newAuthor)
      .then((res) => {
        console.log(res);
        //navigate to root route
        navigate("/authors");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.errors) {
          setErrors(err.response.data.errors);
        }
      });
  };

  const cancelHandler = (e) => {
    navigate("/authors");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>Add an author</p>
        <div>
          <label htmlFor="name">Name:</label>
          {errors.name ? (
            <span className="error">{errors.name.message}</span>
          ) : null}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthorForm;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import AuthorForm from "./AuthorForm";

const Create = (props) => {
  return (
    <div>
      <h2>Add Author</h2>
      <AuthorForm />
    </div>
  );
};

export default Create;

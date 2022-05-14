import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";


const BlogCard = ({blogTitle,imgUrl,blogContent}) => {

  return (
    <div
    className="blog-card"
    // onClick={() =>
    //   currentUser ? navigate("details/" + id) : alert("Please Login..")
    // }
  >
    <img src={defaultImage} alt="" />
    <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
      <h5>{blogTitle}</h5>
    
    </div>
    <div className="movie-over">
      <h2> Overview </h2>
      <p>{blogContent}</p>
    </div>
  </div>
  )
}

export default BlogCard
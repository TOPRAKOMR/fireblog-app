import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BlogAvatar from "../assets/blok.png";


const BlogFrom = () => {
   

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Paper elevation={0}>
            <div>
              <img src={BlogAvatar} alt="blog" />
            </div>
            <h1>New Blog</h1>
            <form id="blog-from" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="blogTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="blogTitle"
                  placeholder="Blog Title.."
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imgUrl" className="form-label">
                  Image URL.
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imgUrl"
                  placeholder="Image URL.."
                  onChange={(e) => setImgUrl(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="blogContent" className="form-label">
                  Content
                </label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="blogContent"
                  placeholder="Content.."
                  rows="10"

                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary form-control"
                value="Submit"
                // onSubmit={handleSubmit}
              />
            </form>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default BlogFrom;

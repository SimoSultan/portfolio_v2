import React from "react";
import BlogList from "./BlogList";
import { Footer, AnimatedSectionHeading } from "../exports";
import CONTENT from "../../content.json";

function Blogs() {
  const {
    blogs: { header, blogList },
  } = CONTENT;

  return (
    <div
      id="blogs-cont"
      style={{
        background:
          "linear-gradient(120deg, rgba(62,148,215,1) 0%, rgba(28,86,129,1) 90%)",
        zIndex: 25,
        position: "relative",
        overflowY: "hidden",
        paddingTop: "5%",
      }}
    >
      <div style={{ height: "88%" }}>
        <AnimatedSectionHeading text={header} opacity={0.8} />

        <BlogList list={blogList} />
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;

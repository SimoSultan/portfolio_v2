import React from "react"
import BlogList from "./BlogList"
import { Footer, AnimatedSectionHeading } from "../exports"

function Blogs() {
    return (
        <div
            id="blogs-cont"
            style={{
                height: "fit-content",
                background:
                    "linear-gradient(120deg, rgba(62,148,215,1) 0%, rgba(28,86,129,1) 90%)",
                zIndex: 25,
                position: "relative",
                overflowY: "hidden",
                paddingTop: "5%",
            }}
        >
            <div style={{ height: "88%" }}>
                <AnimatedSectionHeading text={"BLOGS"} opacity={0.8} />

                <BlogList />
            </div>

            <Footer />
        </div>
    )
}

export default Blogs

import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import CodeArea from "./CodeArea";
import GoBackButton from "./GoBackButton";

const Post = () => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    import("../assets/data/template.md")
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostContent(response))
          .catch(err => console.log(err))
      })
  }, []);

  return (
    <article className="article">
      <div className="container">
        <GoBackButton />

        <div className="post-wrapper">
          <Markdown options={{
            overrides: {
              Code: {
                component: CodeArea
              }
            }
          }}>
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  )
}

export default Post
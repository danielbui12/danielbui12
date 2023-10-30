import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import CodeArea from "./CodeArea";
import GoBackButton from "./GoBackButton";
import { useParams } from "react-router-dom";
import { BASE_FILE_URL } from "../utils/constant";

const Post = () => {
  const { code: postCode } = useParams();
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    if (postCode) {
      fetch(BASE_FILE_URL + postCode + '.md')
        .then(response => response.text())
        .then(response => setPostContent(response))
        .catch(err => console.log(err))
    }
  }, [postCode]);

  return (
    <article className="article">
      <div className="container">
        <GoBackButton />

        <div className="post-wrapper">
          <Markdown options={{
            overrides: {
              Code: {
                component: CodeArea
              },
              img: {
                component: ({ src, alt }) => <img src={src} alt={alt} style={{ maxWidth: '100%'}} />
              },
              Image: {
                component: ({ src, alt }) => <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
              },
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
import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom";

import Markdown from "markdown-to-jsx"
import CodeArea from "./CodeArea";
import GoBackButton from "./GoBackButton";
import DocumentMeta from 'react-document-meta';
import Tag from "./Tag";
import Alert from './Alert';

import { BlogContext } from "./BlogContext";
import { BASE_FILE_URL, BASE_WEBSITE_URL } from "../utils/constant";
import moment from "moment/moment";

const Post = () => {
  const { code: postCode } = useParams();
  const [postContent, setPostContent] = useState("");
  const blogContext = useContext(BlogContext)
  const post = blogContext.blogs.find(_blog => _blog.code === postCode)

  useEffect(() => {
    if (postCode) {
      fetch(BASE_FILE_URL + postCode + '.md')
        .then(response => response.text())
        .then(response => setPostContent(response))
        .catch(err => console.log(err))
    }
  }, [postCode]);

  useLayoutEffect(() => {
    const el = document.getElementById(window.location.hash.replace('#', ''))
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [])

  const meta = {
    title: post?.title || "",
    description: post?.description || "",
    canonical: `${BASE_WEBSITE_URL}blog/${postCode}`,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: (post?.tag || []).join(',')
      }
    }
  };

  return (
    <DocumentMeta  {...meta}>
      <GoBackButton />
      <h2 className="text-primary">{post?.title || ""}</h2>
      <i className="pl-3">{moment(post?.timestamp || new Date()).format('MMMM D, YYYY')}</i>
      <article className="article mt-5">
        <div className="container blog-container">
          <div className="post-wrapper mt-4">
            <Markdown options={{
              overrides: {
                Code: {
                  component: CodeArea
                },
                img: {
                  component: ({ src, alt }) => <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
                },
                Image: {
                  component: ({ src, alt }) => <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
                },
                Alert: {
                  component: Alert
                }
              }
            }}>
              {postContent}
            </Markdown>
          </div>

          <div className="container d-flex flex-wrap gap-4">
            <Tag values={meta.meta.name.keywords.split(',')} />
          </div>
        </div>
      </article>
    </DocumentMeta>
  )
}

export default Post
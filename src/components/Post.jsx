import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import Markdown from "markdown-to-jsx"
import CodeWrapper from "./CodeArea";
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
    // import("../assets/data/customize-your-own-wallet-on-solana.md")
    //   .then(res => {
    //     fetch(res.default)
    //       .then(response => response.text())
    //       .then(response => setPostContent(response))
    //       .catch(err => console.log(err))
    //   })
  }, [postCode]);

  useEffect(() => {
    if (postContent) {
      $(".article ol a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash.toLowerCase();
          console.log(hash, $(hash));
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function () {
            window.location.hash = hash;
          });
        }
      });
    }
  }, [postContent])

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
                pre: {
                  component: CodeWrapper
                },
                img: {
                  component: ({ src, alt }) => <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
                },
                alert: {
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
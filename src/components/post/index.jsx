import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import './Post.css'

const Post = () => {
  const id = useParams().id;
  const [post, setPost] = React.useState({});

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    api(`posts/${id}`)
      .then((data) => setPost(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="post">
        <div className="post__wrapper">
        <div className="post__img">
          <img
            src={post?.imgUrl}
            alt={post?.title}
          />
        </div>
        <div className="post__content">
          <p>
            <b>Author: {post?.author}</b>
          </p>
          <h1 className="text-center">{post?.title}</h1>
          <p>{post?.desc}</p>
        </div>
        </div>
    </div>
  );
};

export default Post;

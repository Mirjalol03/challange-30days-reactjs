import React, { useEffect } from "react";
import { api } from "../../api/api";
import UsePosts from "../../hooks/usePosts";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { imagesUrl } from "../../utils/images";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = UsePosts();
  // Opening and closing the modal
  const [editModal, setEditModal] = React.useState(false);
  // Selected post index
  const [selectedPostIndex, setSelectedPostIndex] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState("");
  // Toggle image button, to show or hide the image button
  const [imageToggleButton, setImageToggleButton] = React.useState(false);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    api("posts")
      .then((data) => setPosts(data.data))
      .catch((err) => console.log(err));
  }, []);


  const handleDelete = (id) => {
    api
      .delete(`posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => console.log(err));
  };

  // handle edit button, to open the modal
  const handleEditButton = (index) => {
    setSelectedPostIndex(index);
    setSelectedImage(posts[index].imgUrl);
    setEditModal(true);
  };

  // handle edit submit, to update the post
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const [title, desc, author] = e.target.elements;
    const updatedPost = {
      title: title.value,
      desc: desc.value,
      imgUrl: selectedImage,
      author: author.value,
    };
    api
      .put(`posts/${posts[selectedPostIndex].id}`, updatedPost)
      .then((data) => {
        setPosts(
          posts.map((post) => {
            if (post.id === data.data.id) {
              return data.data;
            } else {
              return post;
            }
          })
        );
        setEditModal(false);

        // // second way

        // const updatedPosts = [...posts];
        // updatedPosts[selectedPostIndex] = data.data;
        // setPosts(updatedPosts);
        // setEditModal(false);
      }).catch((err) => console.log(err));
  };

  const Navigate = useNavigate();

  return (
    <div className="home">
      <div className="container">
        <h2>All Posts</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.length > 0 &&
            posts.map((post, index) => (
              <div className="col mb-4" key={post.id}>
                <div className="card h-100">
                  <img
                    onClick={() => {Navigate(`/post/${post.id}`, {replace: true})}}
                    className="card-img-top"
                    style={{ cursor: "pointer" }}
                    height={"190px"}
                    src={post.imgUrl}
                    alt=""
                  />
                  <div className="card-body" 
                    style={{ cursor: "pointer" }}
                    onClick={() => {Navigate(`/post/${post.id}`, {replace: true})}}
                    >
                    <h3 className="card-title">
                      {post.title.length > 18
                        ? post.title.substring(0, 18) + "..."
                        : post.title}
                    </h3>
                    <p className="card-text">
                      {post.desc.length > 60
                        ? post.desc.substring(0, 60) + "..."
                        : post.desc}
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-primary py-0 px-2"
                        onClick={() => handleEditButton(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger py-0 px-2"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    </div>
                    <span>
                      <b>{post?.author}</b>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Modal isOpen={editModal} toggle={() => setEditModal(false)}>
        <ModalHeader>Edit Post</ModalHeader>
        <ModalBody>
          <form
            className="d-flex flex-column gap-2"
            onSubmit={(e) => {
              handleEditSubmit(e);
            }}
          >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                defaultValue={posts[selectedPostIndex]?.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                className="form-control"
                id="desc"
                rows="3"
                placeholder="Enter description"
                defaultValue={posts[selectedPostIndex]?.desc}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Enter author"
                defaultValue={posts[selectedPostIndex]?.author}
              />
            </div>
            <div className="form-group">
              <div className="form-image-content d-flex align-items-center justify-content-between my-4">
                <img src={selectedImage} alt="HI" height={"50px"} /> <br />
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setImageToggleButton(!imageToggleButton);
                  }}
                >
                  Select Image
                </button>
              </div>
              <div className="form-other-images mb-3">
                {imageToggleButton &&
                  (imagesUrl.length > 0 ? (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                      {imagesUrl.map((img, index) => (
                        <div className="col" key={index}>
                          <div className="card">
                            <img
                              src={img}
                              className="card-edit-img-top"
                              alt="..."
                              onClick={() => {
                                setSelectedImage(img);
                                setImageToggleButton(false);
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="alert alert-warning" role="alert">
                      No images found
                    </div>
                  ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              submit
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setEditModal(false)}
            >
              Close
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Home;

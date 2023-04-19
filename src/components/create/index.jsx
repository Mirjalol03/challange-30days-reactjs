import React, { useEffect } from "react";
import { Alert, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { imagesUrl } from "../../utils/images";
import { api } from "../../api/api";

const Create = () => {
  const [modal, setModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  // alert state
  const [alert, setAlert] = React.useState({
    isOpen: false,
    message: "Success",
    color: "primary",
  });

  // useEffect for alert
  useEffect(() => {
    const interval = setTimeout(() => {
      setAlert({ isOpen: false });
    }, 3000);

    return () => clearInterval(interval);
  }, [alert.isOpen]);

  // handle Submit to create new post
  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data
    const [title, desc, author] = e.target.elements;

    // check if all fields are filled
    if (
      title.value === "" ||
      desc.value === "" ||
      author.value === "" ||
      selectedImage === ""
    ) {
      setAlert({
        isOpen: true,
        message: "Please fill all the fields",
        color: "danger",
      });
      return;
    }

    // send data to server
    api
      .post("posts", {
        title: title.value,
        desc: desc.value,
        imgUrl: selectedImage,
        author: author.value,
      })
      .then((data) => {
        console.log(data);
        setAlert({
          isOpen: true,
          message: "Post created successfully",
          color: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create">
      <div className="container">
        {/* alert */}
        {alert.isOpen === true && (
          <Alert color={alert.color} isOpen={true}>
            {alert.message}
          </Alert>
        )}
        <h2>Create new Post</h2>
        <div className="create__form">
          <form onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column gap-2">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                className="form-control"
                id="desc"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Enter author"
                defaultValue={'Anonymous'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="imgUrl">Select Image for New post</label> <br />
              <button
                id="imgUrl"
                type="button"
                className="btn btn-secondary"
                onClick={() => setModal(true)}
              >
                Images
              </button>{" "}
              <br />
              {selectedImage !== " " && (
                <img
                  className="my-2"
                  src={selectedImage}
                  alt=""
                  width="100px"
                />
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              submit
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={modal} toggle={() => setModal(false)} size="xl">
        <ModalHeader>Select Image for new post</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
              {imagesUrl.length > 0 &&
                imagesUrl.map((img, index) => (
                  <div
                    className="card mb-3 col"
                    key={index}
                    onClick={() => {
                      setSelectedImage(img);
                      setModal(false);
                    }}
                  >
                    <img
                      src={img}
                      className="card-img-top"
                      height={"180px"}
                      alt="..."
                    />
                  </div>
                ))}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => setModal(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Create;

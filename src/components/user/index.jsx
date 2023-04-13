import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { users } from "../../utils/users";
import "./User.scss";

const User = () => {
  const { id } = useParams();
  console.log(users);
  const findUserIndex = users.findIndex((user) => user.id == id);
  return (
    <main className="user">
      <div className="user__wrapper">
        <div className="user__card row">
            <div className="col-6">
              <div className="user__img">
                <img src={users[findUserIndex].image} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="user__info">
                <h2 className="user__name">{users[findUserIndex].name}</h2>
                <p className="user__bio">{users[findUserIndex].bio}</p>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;

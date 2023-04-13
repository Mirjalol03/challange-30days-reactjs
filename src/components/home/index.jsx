import React from "react";
import "./Home.scss";
import { users } from "../../utils/users";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="main">
        <section className="main__users">
          <div className="container">
            <div className="main__users__wrapper">
              <br />
              <h2 className="main__users__title">Users</h2>
              <div className="main__users__items">
                {/* <div className="main__users__item">
                  <div className="main__users__item--img">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div className="main__users__item--info">
                    <h3 className="main__users__item--name">John doe</h3>
                    <p className="main__users__item--bio">I am a software developer</p>
                    </div>

                </div> */}

                {users.length > 0 &&
                  users.map((user) => (
                    <motion.div
                      onClick={() => {<Navigate to={'users/' + user.id} ></Navigate>}}
                      animate={{
                        scale: [1.05, 1],
                        transition: { duration: 0.15 }
                        // rotate: [0, 0, 270, 270, 0],
                        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }}
                      whileHover={{ scale: 1.05, 
                        transition: { duration: 0.1 } }}
                      whileTap={{ scale: [1.1, 0.9] }}
                      className="main__users__item"
                    >
                      <div className="main__users__item--img">
                        <img src={user.image} alt="" />
                      </div>
                      <div className="main__users__item--info">
                        <h3 className="main__users__item--name">{user.name}</h3>
                        <p className="main__users__item--bio">{user.bio}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

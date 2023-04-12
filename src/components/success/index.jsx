import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Success.scss";
import { Button } from "@mui/material";
import Confetti from "react-confetti";

const Success = () => {
  const { user } = useParams();
  console.log(user);

  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <main className="success">
      <div className="success__card">
        <h2 className="success__card--title">Welcome {user} 👏</h2>
        <h3>{/* give me 50 charector thanks word */}</h3>
        <p className="success__card--text">You have successfully logged in!</p>

        <div className="success__card--footer">
          <Button variant="contained" color="error">
            <Link to={"/"}>Log out</Link>
          </Button>
        </div>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </main>
  );
};

export default Success;

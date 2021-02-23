import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";

import "../css/Home.css";

import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="where is the img"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;

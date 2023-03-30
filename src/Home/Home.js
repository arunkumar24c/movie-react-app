import React from "react";
import Featured from "../component/Featured";
import List from "../component/List";
import Navbar from "../component/Navbar";
import Login from "./Login";
import Watch from "./Watch";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
        width="100%"
        className="back-img"
      /> */}

      <Login/>
      

      <Featured type="movies" />
      <List />
      <List />
      {/* <Watch/> */}
    </div>
  );
};

export default Home;

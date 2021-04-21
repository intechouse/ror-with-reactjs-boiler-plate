import React from "react";

import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Dashboard from "../components/dashboard/Dashboard";

const Home = (props) => {
  console.log("Home, Props are: ", props);
  return (
    <div className=" c-default-layout">
      <Sidebar />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Dashboard />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

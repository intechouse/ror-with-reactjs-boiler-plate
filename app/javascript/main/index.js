import React from "react";

import Routes from "../routes";

const Main = (props) => {
  console.log("Main, Props are: ", props);
  return <Routes props />;
};

export default Main;

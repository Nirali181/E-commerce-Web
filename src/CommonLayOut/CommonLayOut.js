import React from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import { Outlet, Route } from "react-router-dom";

const CommonLayOut = (props) => {
    const {children} = props
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Outlet />
     
    </div>
  );
};

export default CommonLayOut;

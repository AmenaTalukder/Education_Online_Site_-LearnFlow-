import React from "react";

import Middle from "./Middle";
import Popular from "./Popular";
import Mentors from "./Mentors";
import Testimonials from "./Testimonials";
import DailyBlog from "./DailyBlog";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Middle />
      <Popular />
      <Mentors />
      <Testimonials />
      <DailyBlog />
      <Footer />
    </>
  );
};

export default Main;

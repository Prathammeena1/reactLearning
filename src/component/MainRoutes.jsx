import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import PageNotFound from "./PageNotFound.jsx";
import Image from "./Image.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/image/:id" element={<Image />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import Contact from "./views/contact.jsx";
import NavBar from "./component/NavBar.jsx";
import EditContact from "./views/editContact.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="bg-image min-vh-100">
      <BrowserRouter basename={basename}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

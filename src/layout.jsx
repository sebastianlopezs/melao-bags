// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./views/App.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

// import { NotFound } from "./views/notfound.jsx";

import injectContext from "./store/appContext.jsx";
import Registro from "./components/Registro.jsx";

const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  // const basename = process.env.BASENAME || "";
  const basename = import.meta.env.VITE_BASENAME || "";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <App />
              <Footer />
            </>
          }
        />
        <Route
          path= "/registro-usuario"
          element={
            <>
              <Registro />
            </>
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);

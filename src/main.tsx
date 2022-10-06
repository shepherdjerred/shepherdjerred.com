import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Blog from "./components/Blog";
import BlogList from "./components/BlogList";
import GlobalStyles from "./styles/GlobalStyles";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route path="*" element={<App />}></Route>
          <Route path="/blog" element={<BlogList />}></Route>
          <Route path="/blog/libvirt-and-c" element={<Blog />}></Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

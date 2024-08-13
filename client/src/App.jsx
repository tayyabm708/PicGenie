import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
     </Routes>
    </BrowserRouter>
  );
}

import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import {Home, CreatePost } from "./pages"
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

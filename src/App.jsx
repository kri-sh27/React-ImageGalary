import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageGalary from "./components/ImageGalary/ImageGalary";
import { Routes,Route } from "react-router-dom";
import ImageDetails from "./components/ImageDetails/ImageDetails";

function App() {
  return (
    <Routes>
      {/* <ImageGalary /> */}
      <Route path="/" element={<ImageGalary/>}/>
      <Route path="/photos/:id" element={<ImageDetails/>}/>
      <Route path="*" element={<h1> NOT FOUND</h1>}/>

    </Routes>
  );
}

export default App;

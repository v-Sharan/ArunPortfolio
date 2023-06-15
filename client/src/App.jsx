import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "../components";

import {
  Home,
  Academics,
  Grand,
  Project,
  Awards,
  Research,
  Ijournal,
  Iconference,
  Nconference,
  Technical,
  Njournal,
  Ghonour,
  Glecture,
  WorkshopAttened,
  WorkshopOrganized,
  About,
} from "../container";

import "./App.css";

import { useStateContext } from "../contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="bg-main-bg static dark:bg-main-dark-bg navbar w-full lg:hidden">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/grand" element={<Grand />} />
            <Route path="/consultancy" element={<Project />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/research" element={<Research />} />
            <Route path="/ijournal" element={<Ijournal />} />
            <Route path="/iconference" element={<Iconference />} />
            <Route path="/nconference" element={<Nconference />} />
            <Route path="/njournal" element={<Njournal />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/honour" element={<Ghonour />} />
            <Route path="/lectures" element={<Glecture />} />
            <Route path="/workshop" element={<WorkshopAttened />} />
            <Route path="/organized" element={<WorkshopOrganized />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

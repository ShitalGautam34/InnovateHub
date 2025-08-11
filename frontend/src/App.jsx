import React from "react";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Startups", href: "/explore" },
    { name: "Post Ideas", href: "/post" },
    { name: "Funders", href: "/funders" },
  ];
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};

export default App;

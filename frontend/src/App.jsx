import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import PostUpload from "./pages/PostUpload";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  let navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Startups", href: "/explore" },
    { name: "Post Ideas", href: "/post" },
    { name: "Funders", href: "/funders" },
  ];
  //not show nav links on login and signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    navLinks = [];
  }

  return (
    <div
      style={{
        minHeightheight: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Header navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/post" element={<PostUpload />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

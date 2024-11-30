import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/About";
import Intro from "./components/Intro";

export default function AppRouter() {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationEnd = () => {
    setShowIntro(false);
  };

  return (
    <div>
      {showIntro ? (
        <Intro onAnimationEnd={handleAnimationEnd} />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/about" element={<About />} />{" "}
          </Routes>
        </Router>
      )}
    </div>
  );
}

import { useEffect } from "react";
import "../styles/intro.css";

const Intro = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(onAnimationEnd, 2000); // Matches fade-out duration
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="intro font-montrealThin gap-3">
      <div className="intro">Dominic Ellis</div>
      <div className="portfolioIntroText text-neutral-400 ">Portfolio</div>
    </div>
  );
};

export default Intro;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./Experience";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div
        className="InfoContainer text-white mt-[200px] p-[100px] flex flex-col items-center justify-center text-center gap-4"
        data-aos="fade-down"
      >
        <h1 className="text-[30px]">About Me</h1>
        <p className="text-[16px]">
          I am a <span className="font-bold">full-stack software</span> engineer
          attending the University of Oregon with a passion for coding.
        </p>
        <p>
          I first began my computer science journey my senior year of high
          school. Since then, I've been dedicated to expanding my knowledge and
          remain eager to learn.{" "}
        </p>
        <p>
          When I'm not coding I'm probably either playing rugby, at the gym, or
          watching a horror movie
        </p>
      </div>
      <Experience />
    </>
  );
}

export default About;

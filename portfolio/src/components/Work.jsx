import "../styles/Work.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <div className="ProjectsContainer SkillsContainer text-white flex flex-col items-center ">
        <div className="ProjectsHeader font-montrealBold text-[28px] mb-10">
          Projects
        </div>

        {/* Project Card ML*/}
        <div
          className="sentimentAnalysis flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <div
            className="projectCard border-[1px] border-[#494b56] text-white p-4 w-[90%] h-[500px] rounded-xl bg-[url('ML.png')] bg-cover relative transition-all hover:scale-95 duration-300"
            data-aos="zoom-in"
          >
            {/* Icons on Hover */}
            <div className="projectIcons absolute inset-0 flex items-center gap-[20px] justify-center opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm duration-300 rounded-xl">
              {/* Icon Components */}
              <div
                className="icon bg-[#3d3d3d] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="Flask"
                data-aos="fade-up"
              >
                <i className="devicon-flask-original text-4xl"></i>
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Python"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#383216] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="JavaScript"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="React"
                data-aos="fade-up"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-[40px]"
                />
              </div>
            </div>
          </div>

          <div
            className="ProjectDescription font-montreal text-[28px] flex flex-col gap-1 items-center text-center p-10 w-[80%]"
            data-aos="fade-up"
          >
            <h1>AI Sentiment Analysis</h1>
            <h2 className="font-montreal text-[20px] text-neutral-400 mb-4">
              Logistic Regression Model
            </h2>
            <p className="font-montrealThin text-[16px] text-white">
              Built a machine learning model using scikit-learn to classify
              product reviews as positive, neutral, or negative. Achieved 50-78%
              accuracy and deployed it via a Flask API with a React frontend for
              real-time predictions.
            </p>
          </div>

          <a
            href="https://github.com/dellis2cs/aiSentimentAnalysis"
            target="_blank"
            className="transition-all hover:scale-105 duration-300"
          >
            <button
              className="bg-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  mb-[100px]"
              data-aos="fade-up"
            >
              GitHub
            </button>
          </a>
        </div>

        {/* Project Card DevNet*/}
        <div
          className="devNet flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <div
            className="projectCard border-[1px] border-[#494b56] text-white p-4 w-[90%] h-[500px] rounded-xl bg-[url('Homepage.png')] bg-cover relative transition-all hover:scale-95 duration-300"
            data-aos="zoom-in"
          >
            {/* Icons on Hover */}
            <div className="projectIcons absolute inset-0 flex items-center gap-[20px] justify-center opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm duration-300 rounded-xl">
              {/* Icon Components */}
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="React"
                data-aos="fade-up"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Tailwind"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#383216] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="JavaScript"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#1e4c2a] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="NodeJS"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#2f313d] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Express"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="devicon-express-original text-5xl"></i>
              </div>
              <div
                className="icon bg-[#1e4c2a] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="MongoDB"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  className="w-[40px]"
                />
              </div>
            </div>
          </div>

          <div
            className="ProjectDescription font-montreal text-[28px] flex flex-col gap-1 items-center text-center p-10 w-[80%]"
            data-aos="fade-up"
          >
            <h1>DevNet</h1>
            <h2 className="font-montreal text-[20px] text-neutral-400 mb-4">
              Social Network Application
            </h2>
            <p className="font-montrealThin text-[16px] text-white">
              A social media application made using React and Tailwind on the
              front end. The back end is a REST API built with Node.js and
              Express. The application was built for the Hack UO competition,
              hosted by the University of Oregon with a team of 5 people.
            </p>
          </div>

          <a
            href="https://github.com/lundj227/devNet"
            target="_blank"
            className="transition-all hover:scale-105 duration-300"
          >
            <button
              className="bg-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  mb-[100px]"
              data-aos="fade-up"
            >
              GitHub
            </button>
          </a>
        </div>

        {/* Project Card Pixel*/}
        <div
          className="pixelGpt flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <div
            className="projectCard border-[1px] border-[#494b56] text-white p-4 w-[90%] h-[500px] rounded-xl bg-[url('Tavern.png')] bg-cover relative transition-all hover:scale-95 duration-300"
            data-aos="zoom-in"
          >
            {/* Icons on Hover */}
            <div className="projectIcons absolute inset-0 flex items-center gap-[20px] justify-center opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm duration-300 rounded-xl">
              {/* Icon Components */}
              <div
                className="icon bg-[#3d3d3d] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="Flask"
                data-aos="fade-up"
              >
                <i className="devicon-flask-original text-4xl"></i>
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Python"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#383216] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="JavaScript"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-[40px]"
                />
              </div>
            </div>
          </div>

          <div
            className="ProjectDescription font-montreal text-[28px] flex flex-col gap-1 items-center text-center p-10 w-[80%]"
            data-aos="fade-up"
          >
            <h1>PixelGPT</h1>
            <h2 className="font-montreal text-[20px] text-neutral-400 mb-4">
              Personal AI Assistant
            </h2>
            <p className="font-montrealThin text-[16px] text-white">
              PixelGPT is a web application built with Python, Flask, and a
              JavaScript-based frontend, enabling users to interact with ChatGPT
              through voice. With integrated speech recognition and generation,
              using the Eleven Labs API
            </p>
          </div>

          <a
            href="https://github.com/dellis2cs/Pixel_GPT"
            target="_blank"
            className="transition-all hover:scale-105 duration-300"
          >
            <button
              className="bg-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  mb-[100px]"
              data-aos="fade-up"
            >
              GitHub
            </button>
          </a>
        </div>

        {/* Project Card Kaze */}
        <div
          className="Kaze flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <div
            className="projectCard relative border-[1px] border-[#494b56] text-white p-4 w-[90%] h-[500px] rounded-xl transition-all hover:scale-95 duration-300 overflow-hidden"
            data-aos="zoom-in"
          >
            {/* Background video */}
            <video
              src="/Kaze.mp4" // Correct path for the video in the public folder
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Icons on Hover */}
            <div className="projectIcons absolute inset-0 flex items-center gap-[20px] justify-center opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm duration-300 rounded-xl z-10">
              {/* Icon Components */}
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="React"
                data-aos="fade-up"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Tailwind"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#383216] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="JavaScript"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-[40px]"
                />
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div
            className="ProjectDescription font-montreal text-[28px] flex flex-col gap-1 items-center text-center p-10 w-[80%]"
            data-aos="fade-up"
          >
            <h1>Kaze</h1>
            <h2 className="font-montreal text-[20px] text-neutral-400 mb-4">
              Ecommerce Store
            </h2>
            <p className="font-montrealThin text-[16px] text-white">
              An Ecommerce platform built using React and TailWindCSS. The
              routing is all done server side and the products are fetched from
              the FakeStore API
            </p>
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/dellis2cs/KazeStore"
            target="_blank"
            className="transition-all hover:scale-105 duration-300"
          >
            <button
              className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-[100px]"
              data-aos="fade-up"
            >
              GitHub
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <div className="SkillsContainer text-white flex flex-col items-center gap-[30px]  mb-20 ">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/bPGndDYh8qM-rAVV/scene.splinecode" />
        </Suspense>
        <h1 className="font-montrealBold text-[28px]" data-aos="fade-down">
          My Skills
        </h1>

        <div className="skillsWrapper flex flex-wrap justify-center gap-[30px]">
          {/* Languages */}
          <div
            className="skillsCard border-[1px] border-[#494b56] text-black bg-white p-4 min-w-[250px] h-[200px] rounded-xl flex flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <h1 className="text-[28px] mb-3">Languages</h1>
            <div className="languages flex flex-wrap gap-[20px] justify-around">
              <div
                className="icon bg-[#392613] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="HTML5"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="w-[45px]"
                />
              </div>
              <div
                className="icon bg-[#383216] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="JavaScript"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="CSS"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  className="w-[45px]"
                />
              </div>
              <div
                className="icon bg-[#383216] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Python"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="w-[45px]"
                />
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="SQL"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  className="w-[45px]"
                />
              </div>
            </div>
          </div>

          {/* Front-End */}
          <div
            className="skillsCard border-[1px] border-[#494b56] text-black bg-white p-4 min-w-[250px] h-[200px] rounded-xl flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-[28px] mb-3">Front-End</h1>
            <div className="frontEnd flex flex-wrap gap-[20px] justify-around">
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="React"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#1e314c] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Tailwind"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#2f313d] w-[60px] h-[60px] text-white flex justify-center items-center rounded-lg"
                title="Framer Motion"
              >
                <i className="devicon-framermotion-original text-3xl"></i>
              </div>
            </div>
          </div>

          {/* Back-End */}
          <div
            className="skillsCard border-[1px] border-[#494b56] text-black bg-white p-4 min-w-[250px] h-[200px] rounded-xl flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-[28px] mb-3">Back-End</h1>
            <div className="backEnd flex flex-wrap gap-[20px] justify-around">
              <div
                className="icon bg-[#1e4c2a] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="NodeJS"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#2f313d] text-white w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Express"
              >
                <i className="devicon-express-original text-5xl"></i>
              </div>
              <div
                className="icon bg-[#1e4c2a] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="MongoDB"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  className="w-[40px]"
                />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div
            className="skillsCard border-[1px] border-[#494b56] text-black bg-white p-4 min-w-[250px] h-[200px] rounded-xl flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="text-[28px] mb-3">Tools</h1>
            <div className="tools flex flex-wrap gap-[20px] justify-around">
              <div
                className="icon bg-[#392613] w-[60px] h-[60px] flex justify-center items-center rounded"
                title="Git"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#2f313d] text-white w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Github"
              >
                <i className="devicon-github-original text-5xl"></i>
              </div>
              <div
                className="icon bg-[#18374e] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="VS Code"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#4e1818] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Npm"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#4e1844] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Jest"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
                  className="w-[40px]"
                />
              </div>
              <div
                className="icon bg-[#39184e] w-[60px] h-[60px] flex justify-center items-center rounded-lg"
                title="Vite"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  className="w-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Work() {
  return (
    <div className="mt-10">
      <Skills />
      <Projects />
    </div>
  );
}

export default Work;

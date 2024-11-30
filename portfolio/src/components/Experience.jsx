import "../styles/Work.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <div className="SkillsContainer text-white flex flex-col items-center gap-[30px]  mb-20 ">
        <h1 className="font-montrealBold text-[28px]" data-aos="fade-down">
          My Experience
        </h1>

        <div className="">
          {/* Languages */}
          <div
            className="skillsCard border-[1px] border-[#494b56] text-black bg-white p-10 min-w-[250px] min-h-[200px] rounded-xl flex flex-col justify-center items-center text-center max-w-[550px]"
            data-aos="fade-up"
          >
            <h1 className="text-[28px] mb-3">
              Machine Learning Research Intern
            </h1>
            <div className="languages flex flex-wrap gap-[20px] justify-around"></div>
            <div className="font-bold text-[20px] mb-2">
              Grok AI, San Francisco, CA
            </div>
            <ul>
              <li className="">
                Contributed to an emerging startup focused on leveraging
                artificial intelligence for innovative research and consulting
                projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import c from "../assets/c++logo.png";
import python from "../assets/pythonLogo.png";

// Skills with an icon. Add an `img` for any new skill you have a logo for.
const skills = [
  { name: "Flutter" },
  { name: "Dart" },
  { name: "HTML", img: Html, size: "w-10" },
  { name: "CSS", img: Css, size: "w-8" },
  { name: "Javascript", img: Javascript, size: "w-10" },
  { name: "React", img: ReactLogo, size: "w-8 rounded-full" },
  { name: "Redux", img: ReduxLogo, size: "w-8" },
  { name: "Tailwind Css", img: Tailwind, size: "w-8 rounded-full" },
  { name: "Bootstrap", img: Bootstrap, size: "w-10" },
  { name: "Node Js", img: NodeLogo, size: "w-10" },
  { name: "Mongodb", img: Mongodb, size: "w-10" },
  { name: "Express Js", img: Express, size: "w-10" },
  { name: "C++", img: c, size: "w-9" },
  { name: "Python", img: python, size: "w-9" },
];

const chip =
  "border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Harshit Kumar
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Software Engineer with experience in Flutter mobile development
              and the MERN stack.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I graduated in Computer Science from NIT Patna in 2025. I
                  started with the MERN stack, building a full-stack BookStore,
                  game websites and an AI chatbot, then moved into cross-platform
                  mobile development with Flutter.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  At Bellpost, I built Flutter apps with search, analytics and
                  API integrations. Today, at the Centre for Railway Information
                  Systems (CRIS), I build RailPrahari, an app for railway
                  officers, and the GRP integration for RailMadad.
                </p>
                <img
                  src={MernStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className={chip}>
                      {skill.img && (
                        <img src={skill.img} alt="" className={skill.size} />
                      )}
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              I enjoy competitive programming and solving data structure
              problems. I am a LeetCode Knight (max rating 1855, top 5%
              globally) with 850+ problems solved, and I take part in contests
              on Codeforces and GeeksforGeeks. I was also part of Amazon ML
              School 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

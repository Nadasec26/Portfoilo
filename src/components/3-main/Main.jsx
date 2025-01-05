// @ts-nocheck
import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "motion/react";
const myProjects = [
  {
    projectTitle: "React Project",
    category: ["react"],
    imgPath: "./images/1.jpg",
  },
  {
    projectTitle: "React & Css Project",
    category: ["react", "css"],
    imgPath: "./images/2.jpg",
  },
  { projectTitle: "Css Project", category: ["css"], imgPath: "./images/3.jpg" },
  {
    projectTitle: "React Project",
    category: ["react"],
    imgPath: "./images/4.jpg",
  },
  {
    projectTitle: "JavaScript Project",
    category: ["js"],
    imgPath: "./images/5.jpg",
  },

  {
    projectTitle: "JavaScript Project",
    category: ["js"],
    imgPath: "./images/6.jpg",
  },
  {
    projectTitle: "Html Project",
    category: ["css"],
    imgPath: "./images/7.jpg",
  },
  {
    projectTitle: "MUI Project",
    category: ["react"],
    imgPath: "./images/8.jpg",
  },
  {
    projectTitle: "JavaScript Project",
    category: ["js"],
    imgPath: "./images/9.jpg",
  },
];
export default function Main() {
  const [CurrentActive, setCurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setarr(newArr);
  };
  return (
    <main className="flex items-start gap-7">
      <section className="flex flex-col gap-2.5">
        <button
          onClick={() => {
            setCurrentActive("all");
            setarr(myProjects);
          }}
          className={CurrentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={CurrentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={CurrentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={CurrentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
      </section>
      <section className="flex flex-wrap gap-4 justify-center">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:"spring",damping:8, stiffness:50}}
                key={item.imgPath}
                className="card max-w-s rounded-lg shado border-2 border-solid border-blue-300  hover:border-blue-400 hover:rotate-1 hover:scale-105 cursor-pointer"
              >
                <img
                  src={item.imgPath}
                  width={230}
                  className="rounded-lg"
                  alt=""
                />
                <div className="p-5 py-4 px-1.5" style={{ width: "230px" }}>
                  <h1 className="mb-2 text-2xl font-bold tracking-tight">
                    {item.projectTitle}
                  </h1>
                  <p className="font-normal text-sm mt-3 mb-3.5">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <div className="icon-link text-xl"></div>
                      <div className="icon-github text-xl"></div>
                    </div>
                    <a href="" className="text-sm flex self-end mr-3">
                      more
                      <span className="icon-arrow_forward self-center"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

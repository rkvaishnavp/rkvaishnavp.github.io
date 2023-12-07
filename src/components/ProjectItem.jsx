import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ item }) => {
  return (
    <div className="relative flex items-center justify-center w-full p-4 h-[200px] border-2 rounded-3xl">
      <div className="absolute top-[50%] left-[50%] h-full translate-x-[-50%] translate-y-[-50%] w-full mt-3">
        <h3 className="text-l font-bold tracking-wider text-center mb-3">
          {item.title}
        </h3>
        <p className="mb-3 text-center">{item.skills}</p>
        <div className="flex flex-row items-center justify-around h-[20%] w-full pt-3">
          <a href={item.github_link}>
            <FaGithub size={30} />
          </a>
          {item.demo_link && (
            <a href={item.demo_link}>
              <div className="border-2 border-black p-2 rounded-xl justify-center">
                Live Demo
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

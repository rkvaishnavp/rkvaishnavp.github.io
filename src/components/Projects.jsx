import React from "react";
import ProjectItem from "./ProjectItem";

const data = [
  {
    title: "Threads Clone (Full Stack Web Development)",
    skills: "React.js, Express.js, Node.js, MongoDB",
    github_link: "https://github.com/rkvaishnavp/Threads-Clone",
    demo_link: "https://threads-clone-frontend-efde.onrender.com/",
  },
  {
    title:
      "Full-stack Book Store Inventory Website (Full Stack Web Development)",
    skills: "React.js, Node.js, HTML, CSS, Express.js, MongoDB, Tailwind CSS",
    github_link: "https://github.com/rkvaishnavp/simple_book_store",
    demo_link: "",
  },
  {
    title:
      "Custom System Call Addtion to LINUX Kernel 5.4.0 (Kernel Programming)",
    skills: "C, Linux Kernel Compilation, Makefile",
    github_link: "https://github.com/rkvaishnavp/OS-Project",
    demo_link: "",
  },
  {
    title: "RISC-V CPU Core (Verilog, Computer Architecture)",
    skills: "Verilog, Xilinx Vivado, Artix A7",
    github_link: "https://github.com/rkvaishnavp/YARC",
    demo_link: "",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <h2 className="text-center py-8">
        Here are some of my projects. Please Check out my{" "}
        <a
          href="https://drive.google.com/file/d/1usQrDpnGLIT3SY-h8RK8dkXtPr8BjdhR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", color: "blue" }}
        >
          Resume
        </a>{" "}
        for more.
      </h2>
      <div className="grid sm:grid-cols-2 gap-12">
        {data.map((item, id) => (
          <ProjectItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

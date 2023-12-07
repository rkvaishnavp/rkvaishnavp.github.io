import React from "react";

const data = {
  degree: "B.E. in Electronics & Instrumentation",
  university: "BITS Pilani K.K.Birla Goa Campus",
  duration: "Oct. 2020 - Jul. 2024",
  relevant_coursework:
    "Operating Systems, Analog and Digital VLSI Design, Digital Design, Microprocessor Programming & Interfacing, Object Oriented Programming",
};

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-3">
        Education
      </h1>
      <ol className="flex flex-col md:flex-row relative">
        <li className="mb-10 ml-4">
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="text-xl font-bold text-[#0015be]">
              {data.university}
            </span>
            <span className="text-lg text-[#0015be]">{data.degree}</span>
            <span className="my-1 text-sm font-normal leading-none text-stone-400">
              {data.duration}
            </span>
          </p>
          <p className="my-2 text-base font-normal text-stone-500">
            {data.relevant_coursework}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Education;

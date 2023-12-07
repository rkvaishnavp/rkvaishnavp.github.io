import React from "react";
import WorkItem from "./WorkItem";

const data = [
  // {
  //   title: "Project Student",
  //   company: "BITS Pilani K.K.Birla Goa Campus",
  //   duration: "Jan. 2024 - May 2024",
  //   details: ["Development of a Neuromorphic co-processor on Zynq Soc"],
  // },
  {
    title: "Intern",
    company: "Ecosi Energy",
    duration: "Aug. 2023 - Dec. 2023",
    details: [
      "Developed a real-time data acquisition system using ESP32.",
      "Programmed the ESP32 micro controller for data processing and secure Wi-Fi data transmission.",
      "Integrated the system with Google Sheets to enable automated real-time data logging.",
      "Conducted real-time analysis, including power calculations and voltage sag detection, facilitating data-driven decision making and system optimization",
    ],
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-2">Work</h1>
      {data.map((item, id) => (
        <WorkItem key={id} item={item} />
      ))}
    </div>
  );
};

export default Work;

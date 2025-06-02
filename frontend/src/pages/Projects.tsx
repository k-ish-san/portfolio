import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

import {
  SiReact,
  SiFirebase,
 
  SiNpm,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiImdb ,
  SiArduino,
  SiRaspberrypi,
 
  SiVercel,
  


 // SiFigma,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  //SiOverleaf,
  SiPostman,
 // SiPerplexity,
 // SiGithub,
  SiRedux,
} from "react-icons/si";

import { DiNodejs } from "react-icons/di";

import {
  MdOutlineSensors,
  MdOutlineSolarPower,
  MdOutlineWifiTethering,
  MdOutlineCloudUpload, 
} from "react-icons/md";

import { FaCarBattery } from "react-icons/fa";

const projects = [
  // E-commerce Website using MERN Stack
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748863601/c9ca06ec-4bac-4fd2-9df2-71a267d3ec98.png",
    title: "E-commerce Website using MERN Stack",
    tags: [
      { label: "Npm", icon: SiNpm },
      { label: "React.js", icon: SiReact },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Node.js", icon: DiNodejs },
      { label: "Express.js", icon: SiExpress },
      { label: "Redux", icon: SiRedux },
      { label: "Vite", icon: SiVite },
      { label: "Postman", icon: SiPostman },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "JavaScript", icon: SiJavascript },
      { label: "Vercel", icon: SiVercel },
    ],
    github: "https://github.com/k-ish-san/E-commerce-MERN",
    live: "https://mern-frontend-tau-two.vercel.app/",
    category: "Web development",
  },
  // Tmdb Clone
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748864535/5624ba8e-05d1-46bc-a004-4a9a4b3897fd.png",
    title: "Tmdb Clone",
    tags: [
      { label: "React.js", icon: SiReact },
      { label: "Tmdb API", icon: SiImdb },
      { label: "Vercel", icon: SiVercel },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "Vite", icon: SiVite },
    ],
    github: "https://github.com/k-ish-san/Tmdb-clone",
    live: "https://tmdb-clone-ticp.vercel.app/",
    category: "Web development",
  },
  // Water Quality Monitoring System using LoRaWAN
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748863045/Screenshot_2025-06-02_164708_wopzzj.png",
    title: "Water Quality Monitoring System using LoRaWAN",
    tags: [
      { label: "LoRaWAN", icon: MdOutlineWifiTethering },
      { label: "Arduino IDE", icon: SiArduino },
      { label: "Raspberry Pi", icon: SiRaspberrypi },
      { label: "Sensors", icon: MdOutlineSensors },
      { label: "The Things Network", icon: MdOutlineCloudUpload },
    ],
    github:
      "https://github.com/k-ish-san/Water-Quality-Monitoring-System-using-LoRaWAN/",
    live: "https://github.com/k-ish-san/Water-Quality-Monitoring-System-using-LoRaWAN/blob/main/Water%20Quality%20Monitoring%20System%20using%20LoRaWAN.pdf",
    category: "IoT",
  },
  // Pollution Monitoring System using ESP32
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748863411/Screenshot_2025-06-02_162707_zcnbhj.png",
    title: "Pollution Monitoring System using ESP32",
    tags: [
      { label: "ESP32", icon: MdOutlineWifiTethering },
      { label: "Arduino IDE", icon: SiArduino },
      { label: "Sensors", icon: MdOutlineSensors },
      { label: "Solar Panel", icon: MdOutlineSolarPower },
      { label: "Lithium Battery", icon: FaCarBattery },
      { label: "Firebase", icon: SiFirebase },
    ],
    github:
      "https://github.com/k-ish-san/Pollution-monitoring-system-for-enhancing-sustainability-of-environment-using-IoT",
    live: "https://github.com/k-ish-san/Pollution-monitoring-system-for-enhancing-sustainability-of-environment-using-IoT/blob/main/POLLUTION%20MONITORING%20SYSTEM%20FOR%20ENHANCING%20THE%20SUSTAINABILITY%20OF%20ENVIRONMENT%20USING%20IOT.pdf",
    category: "IoT",
  },
  // Rock Paper Scissors Game
  {
    image:
      "https://res.cloudinary.com/dc4gefidz/image/upload/v1748864915/22409bb1-55ad-4bc0-b3b5-c6c08805b17b.png",
    title: "Rock Paper Scissors Game",
    tags: [
      { label: "Html5", icon: SiHtml5 },
      { label: "Css3", icon: SiCss3 },
      { label: "Javascript", icon: SiJavascript },
    ],
    github: "https://github.com/k-ish-san/Rock-Paper-Scissors",
    live: "https://k-ish-san.github.io/Rock-Paper-Scissors/",
    category: "Web development",
  },
  // ...more projects
];

const categories = ["All", "Web development", "IoT"];

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="mx-auto px-15 py-15 dark:bg-gradient-to-b from-indigo-900 to-purple-900 light:bg-white">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold font-mono dark:text-white light:text-black">Projects</h1>
        <span className="bg-indigo-500 text-white px-2 border-2 border-indigo-900">{filteredProjects.length}</span>
      </div>
      <div className="flex gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-white text-gray-500 border-gray-300"
            } font-semibold transition`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.title + idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;

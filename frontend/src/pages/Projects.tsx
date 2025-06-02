import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiNpm,
  SiClerk,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    image: "https://your-image-url.com/manage-easy.jpg",
    title: "Manage Easy",
    tags: [
      { label: "React.js", icon: SiReact },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "Firebase", icon: SiFirebase },
    ],
    github: "https://github.com/yourprofile/manage-easy",
    live: "https://manage-easy.com",
    category: "Web development",
  },
  {
    image: "https://your-image-url.com/trackcel.jpg",
    title: "Trackcel",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Postgres", icon: SiPostgresql },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "Prisma", icon: SiPrisma },
    ],
    github: "https://github.com/yourprofile/trackcel",
    live: "https://trackcel.com",
    category: "Web development",
  },
  {
    image: "https://your-image-url.com/vyrn-toast.jpg",
    title: "Vyrn Toast",
    tags: [
      { label: "Npm", icon: SiNpm },
      { label: "React.js", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
    ],
    github: "https://github.com/yourprofile/vyrn-toast",
    live: "https://vyrn-toast.com",
    category: "Web development",
  },
  {
    image: "https://your-image-url.com/manage-easy.jpg",
    title: "Manage Easy",
    tags: [
      { label: "React.js", icon: SiReact },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "Firebase", icon: SiFirebase },
    ],
    github: "https://github.com/yourprofile/manage-easy",
    live: "https://manage-easy.com",
    category: "Web development",
  },
  {
    image: "https://your-image-url.com/trackcel.jpg",
    title: "Trackcel",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Postgres", icon: SiPostgresql },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind Css", icon: SiTailwindcss },
      { label: "Prisma", icon: SiPrisma },
    ],
    github: "https://github.com/yourprofile/trackcel",
    live: "https://trackcel.com",
    category: "Web development",
  },
  {
    image: "https://your-image-url.com/vyrn-toast.jpg",
    title: "Rock Paper Scissors",
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

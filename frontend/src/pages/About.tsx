import GitHubCalendar from "react-github-calendar";

import React from "react";
import SkillGrid from "../components/SkillGrid";
import { DiVisualstudio, DiMysql } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiGit,
  SiVercel,
  SiFigma,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiOverleaf,
  SiPostman,
  SiPerplexity,
  SiGithub,
  SiRedux,

} from "react-icons/si";
import ThemeToggle from "../components/ThemeToggle";

const skills = [
  { icon: <SiHtml5 />, label: "HTML" },
  { icon: <SiCss3 />, label: "CSS" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <SiReact />, label: "React.js" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiTailwindcss />, label: "Tailwindcss" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <DiMysql />, label: "MySQL" },
];

const tools = [
  { icon: <DiVisualstudio />, label: "VS Code" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiVercel />, label: "Vercel" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiVite />, label: "Vite" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiOverleaf />, label: "Overleaf" },
  { icon: <SiPerplexity />, label: "Perplexity" },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-8">
    {children}
  </h2>
);
const About = () => {
  return (
    <div className="light:bg-white dark:bg-black light:text-black dark:text-white">
      <div className="min-h-screen w-full px-4 py-12 font-mono relative">
        {/* Starry background can be added with a canvas or SVG here */}
        <SectionTitle>
          Professional <span className="text-indigo-700">Skillset</span>
        </SectionTitle>
        <SkillGrid skills={skills} />
        <div className="mb-8"></div>
        <SectionTitle>
          <span className="text-indigo-700">Tools</span> I use
        </SectionTitle>
        <SkillGrid skills={tools} />

        <div className="w-full px-4 py-12 font-mono light:bg-white dark:bg-black light:text-black dark:text-white flex flex-col items-center">
          <SectionTitle>
            Days I <span className="text-indigo-700">Code</span>
          </SectionTitle>
          <div className="w-full max-w-4xl px-4">
            <GitHubCalendar
              username="k-ish-san"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              colorScheme={
                document.documentElement.classList.contains("dark") ? "dark" : "light"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

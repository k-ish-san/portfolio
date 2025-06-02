import ProfileIntro from "../components/ProfileIntro";
import Timeline from "../components/Timeline";
import GitHubCalendar from "react-github-calendar";
import Typewriter from "typewriter-effect";
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


const About = () =>
{
  const events = [
    {
      id: "1",
      date: "2016 – 2018",
      title: "Nithyananda Bhavan English Medium School",
      subtitle: "CBSE",
      description:
        "Completed my schooling with a focus on science and mathematics, laying the foundation for my interest in technology.",
      grade: "10th Grade",
      score: "Percentage: 87%",
    },
    {
      id: "2",
      date: "2018 – 2020",
      title: "Nithyananda Bhavan English Medium School",
      subtitle: "CBSE",
      description:
        "Completed my schooling with a focus on computer science and mathematics, laying the foundation for my interest in technology.",
      grade: "12th Grade",
      score: "Percentage: 94.2%",
    },
    {
      id: "3",
      date: "2020 – 2024",
      title: "Government College of Engineering Kannur",
      subtitle: "B.Tech in Electronics and Communication Engineering",
      description:
        "Pursuing a Bachelor's degree in Electronics and Communication Engineering, where I am honing my skills in both hardware and software development.",
      grade: "Graduate",
      score: "CGPA: 7.58",
    },
    // Add more events as needed
  ];

  return (
    <div className="light:bg-white dark:bg-black light:text-black dark:text-white">
      <ProfileIntro
        name="Samrudh Kishsan P M"
        title={
          <Typewriter
            options={{
              strings: [
                "Software Developer_",
                "Frontend Developer_",
                "MERN Stack Developer_",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        }
        location="Based in Kerala, India"
        avatarUrl="https://res.cloudinary.com/dc4gefidz/image/upload/v1748842041/person-with-hood-that-says-evil-it_647963-12138_n93qrx.jpg"
        description="I'm a passionate web developer who loves creating dynamic and responsive web applications. My expertise lies in front-end development using modern frameworks like React , and I have a solid understanding of back-end technologies such as Node.js and Python. I'm dedicated to crafting user-centric designs and writing clean, maintainable code. My goal is to build innovative solutions that solve real-world problems and enhance user experiences."
      />
      <SectionTitle>
        My <span className="text-indigo-700">Journey</span>
      </SectionTitle>
      <Timeline events={events} />

      <div className="min-h-screen w-full px-4 py-12 font-mono relative">
        {/* Starry background can be added with a canvas or SVG here */}
        <SectionTitle>
          Technical <span className="text-indigo-700">Skills</span>
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
                document.documentElement.classList.contains("dark")
                  ? "dark"
                  : "light"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

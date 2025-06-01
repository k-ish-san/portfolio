import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center bg-transparent border dark:border-white light:border:black rounded-lg p-6 min-w-[150px] min-h-[150px] hover:scale-105 transition-transform duration-200 shadow-md">
    <div className="text-5xl mb-4 light:text-black dark:text-white">{icon}</div>
    <span className=" light:text-black dark:text-white font-mono text-lg tracking-widest uppercase">
      {label}
    </span>
  </div>
);

export default SkillCard;

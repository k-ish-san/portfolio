import React from "react";
import SkillCard from "./SkillCard";

interface SkillGridProps {
  skills: { icon: React.ReactNode; label: string }[];
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8 justify-items-center">
    {skills.map((skill, idx) => (
      <SkillCard
        key={skill.label + idx}
        icon={skill.icon}
        label={skill.label}
      />
    ))}
  </div>
);

export default SkillGrid;

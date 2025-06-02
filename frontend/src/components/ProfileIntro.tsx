// src/components/ProfileIntro.tsx
import React from "react";


interface ProfileIntroProps {
  name: string;
  title?: React.ReactNode;
  location: string;
  description: string;
  avatarUrl: string;
}

const ProfileIntro: React.FC<ProfileIntroProps> = ({
  name,
  title,
  location,
  description,
  avatarUrl,
}) => (
  <div className="flex items-start px-10 gap-6 p-8 rounded-xl shadow-lg max- mx-auto border-b-1 dark:border-white ">
    <img
      src={avatarUrl}
      alt={name}
      className="w-24 h-24 rounded-lg object-cover bg-gray-200"
    />
    <div>
      <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-500 font-mono">{name}</h1>
      <div className="light:text-violet-600 dark:text-indigo-600 font-medium font-sans">{title}</div>
      <div className="light:text-indigo-600 dark:text-indigo-300 mb-4">{location}</div>
      <p className="light:text-gray-700 dark:text-white leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ProfileIntro;

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
  <div className="flex items-start px-10 gap-6 light:bg-blue-50 p-8 rounded-xl shadow max- mx-auto">
    <img
      src={avatarUrl}
      alt={name}
      className="w-24 h-24 rounded-lg object-cover bg-gray-200"
    />
    <div>
      <h1 className="text-2xl font-bold text-gray-400">{name}</h1>
      <div className="text-gray-500 font-medium">{title}</div>
      <div className="text-gray-400 mb-4">{location}</div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ProfileIntro;

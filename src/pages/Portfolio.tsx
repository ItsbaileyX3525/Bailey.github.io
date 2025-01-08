import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    name: 'Godot',
    imageUrl: 'https://i.postimg.cc/R9Ws3k6Y/image.png',
    description:
      "Developed multiple 3D and 2D games using Godot's physics engine and particle systems",
  },
  {
    name: 'C++',
    imageUrl:
      'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/04/unreal-engine-5.jpeg?fit=2160%2C1216&quality=50&strip=all&ssl=1',
    description:
      'Built many differnt console applications and games with unreal engine',
  },
  {
    name: 'C#',
    imageUrl: 'https://i.postimg.cc/SQPk4RNq/Media.jpg',
    description: 'Developed Unity games',
  },
  {
    name: 'JavaScript',
    imageUrl: 'https://i.postimg.cc/Gtd7wk8z/image.png',
    description: 'Created interactive web applications and game prototypes',
  },
  {
    name: 'Python',
    imageUrl: 'https://i.postimg.cc/brx71ybV/image.png',
    description: 'Created various applications and PRs for ursina engine',
  },
  {
    name: 'Game Design',
    imageUrl: 'https://i.postimg.cc/YS8jz7N9/image.png',
    description: 'Designed game mechanics and player experiences',
  },
  {
    name: 'UI/UX',
    imageUrl: 'https://i.postimg.cc/fWdDwZ39/image.png',
    description: 'Created intuitive game interfaces and user experiences',
  },
];

export const Portfolio: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const experiences = [
    {
      title: 'Indie developer',
      company: 'Bailey Games',
      period: '2021 - Present',
      description:
        'Created mobile and computer games, implementing monetization strategies such as ads and IAP.',
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen p-8 ml-16 md:ml-64">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Professional Journey</h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform hover:scale-102"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setSelectedSkill(skill)}
              >
                {skill.name}
              </div>
            ))}
          </div>

          {selectedSkill && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6 relative animate-fade-in">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
                <img
                  src={selectedSkill.imageUrl}
                  alt={selectedSkill.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">
                  {selectedSkill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

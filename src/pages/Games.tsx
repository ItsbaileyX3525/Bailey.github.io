import React, { useState } from 'react';
import { Game } from '../types';

const games: Game[] = [
  {
    id: 1,
    title: 'Sus Clicker Remastered',
    description:
      'A fairly simple clicker game that uses characters from the game "Amoung us',
    imageUrl:
      'https://img.itch.zone/aW1nLzE2NzE3OTI1LnBuZw==/315x250%23c/7FhNGE.png',
    releaseDate: '2024',
    platform: 'PC, Mobile',
    genre: 'Clicker',
    projectUrl: 'https://itsbaileyx3525.itch.io/ermmmm-what-the-sigma',
  },
  {
    id: 2,
    title: 'Platformer 2.0',
    description: 'My first platformer in Godot with a story to it!',
    imageUrl:
      'https://img.itch.zone/aW1nLzE2NDI3NjYyLnBuZw==/315x250%23c/m8Ynhn.png',
    releaseDate: '2023',
    platform: 'PC, Mobile',
    genre: 'Platformer',
    projectUrl: 'https://itsbaileyx3525.itch.io/platformer-2-0',
  },
  {
    id: 3,
    title: 'Sus Clicker',
    description: 'The first version of sus clicker.',
    imageUrl:
      'https://img.itch.zone/aW1nLzEwOTE2MDg2LnBuZw==/347x500/fpSLIo.png',
    releaseDate: '2022',
    platform: 'PC, Mobile',
    genre: 'Clicker',
    projectUrl: 'https://itsbaileyx3525.itch.io/sus-clicker',
  },
  {
    id: 4,
    title: 'Into the abyss',
    description:
      'A simple game where you look for the enemy and survive till 6AM',
    imageUrl:
      'https://img.itch.zone/aW1nLzE4MjgzNDI5LmpwZWc=/315x250%23c/dd2UE0.jpeg',
    releaseDate: '2024',
    platform: 'PC',
    genre: 'Idk, lol',
    projectUrl: 'https://itsbaileyx3525.itch.io/into-the-abyss',
  },
  {
    id: 5,
    title: 'BDDARQ',
    description:
      'A game where you answer computing questions',
    imageUrl:
      'https://img.itch.zone/aW1nLzE4NjUzNTU2LnBuZw==/315x250%23c/Ohi%2F8x.png',
    releaseDate: '2024',
    platform: 'PC',
    genre: 'Trivia',
    projectUrl: 'https://itsbaileyx3525.itch.io/bddarq',
  },
];

export const Games: React.FC = () => {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-8 ml-16 md:ml-64">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Games</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <a
              href={game.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={game.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div
                className={`
                bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg
                transition-all duration-300 transform
                ${hoveredGame === game.id ? 'scale-105 shadow-xl' : ''}
              `}
              >
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{game.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {game.description}
                  </p>

                  {hoveredGame === game.id && (
                    <div className="space-y-2 animate-fade-in">
                      <p>
                        <span className="font-semibold">Release Date:</span>{' '}
                        {game.releaseDate}
                      </p>
                      <p>
                        <span className="font-semibold">Platform:</span>{' '}
                        {game.platform}
                      </p>
                      <p>
                        <span className="font-semibold">Genre:</span>{' '}
                        {game.genre}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

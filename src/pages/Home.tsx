import React from 'react';
import { Code, Gamepad2, Rocket } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-8 ml-16 md:ml-64">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <img
            src="https://avatars.githubusercontent.com/u/80989969?v=4"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2">Bailey Miles</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Game Developer & Web designer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <Code className="w-8 h-8 mb-4 text-green-500" />
            <h2 className="text-xl font-semibold mb-2">Coding</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learning many languages like Python, C++, C# and more
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <Gamepad2 className="w-8 h-8 mb-4 text-green-500" />
            <h2 className="text-xl font-semibold mb-2">Game Development</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Creating immersive gaming experiences with Unity and Unreal Engine
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <Rocket className="w-8 h-8 mb-4 text-purple-500" />
            <h2 className="text-xl font-semibold mb-2">Innovation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Pushing boundaries with cutting-edge technology and creative
              solutions
            </p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Starting my carrer in development in my first year of school, I
            didn't really get serious until year 10 when I started looking into
            game engines such as Ursina and Unity game engine. Over the course
            of year 10 I spent my time learning unity and C# to create games for
            my classmates with my first game being called "Sus Clicker" which
            was a very sussy clicker game. After the Unity game engine
            contreversy I switched from Unity in year 11 to general apps and
            software, reverting to ursina. During this time I learnt Brainf**k,
            Python, HTML, JS and CSS. When I reached college I learnt more
            languages such as C++ and ASM out of bordem and I came across the
            game engine that I use all the time called Godot which works a
            charm!
          </p>
          <p>
            My passion lies in creating games for others to enjoy, by learning
            loads of different coding languages it keeps me engaged in my coding
            carrer, reaching hard points and overcoming them. By creating games
            for people to play my hope is that they have fun and enjoy them
            which so far I believe they have, with the remaster of my first ever
            game "Sus clicker", aptly named "Sus clicker remasted", Everyone in
            my college course enjoyed playing it! Now I work on loads of
            different little games with my main game coming to Steam soon!
          </p>
        </div>
      </div>
    </div>
  );
};

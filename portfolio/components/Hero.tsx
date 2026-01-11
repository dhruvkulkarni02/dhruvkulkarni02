import React from 'react';

interface HeroProps {
  profile: {
    name: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    login: string;
  };
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center px-4">
      <img
        src={profile.avatar_url}
        alt={profile.name}
        className="w-32 h-32 rounded-full mb-6 border-4 border-gray-200 dark:border-gray-700 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        {profile.name}
      </h1>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-4 transition-colors"
      >
        @{profile.login}
      </a>
      <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
        {profile.bio}
      </p>
      <div className="flex mt-6 space-x-4">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          GitHub
        </a>
        <a
          href="#"
          className="px-6 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dhruv Kulkarni. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/dhruvkulkarni02" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

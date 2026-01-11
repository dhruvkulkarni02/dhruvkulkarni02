import React from 'react';
import { Project } from '../data/mockData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {project.name}
          </a>
        </h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {project.stargazers_count}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {project.description || "No description available."}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {project.language || "N/A"}
        </span>
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
          View Repo &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

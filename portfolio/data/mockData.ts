export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A full-featured e-commerce solution built with Next.js and Stripe integration.",
    html_url: "#",
    language: "TypeScript",
    stargazers_count: 120,
  },
  {
    id: 2,
    name: "Weather App",
    description: "Real-time weather application using OpenWeatherMap API and React.",
    html_url: "#",
    language: "JavaScript",
    stargazers_count: 85,
  },
  {
    id: 3,
    name: "Task Manager",
    description: "Productivity tool for managing daily tasks with drag-and-drop functionality.",
    html_url: "#",
    language: "React",
    stargazers_count: 45,
  },
  {
    id: 4,
    name: "Portfolio V1",
    description: "My first personal portfolio website built with HTML and CSS.",
    html_url: "#",
    language: "HTML",
    stargazers_count: 12,
  },
];

export const mockProfile = {
  name: "Dhruv Kulkarni",
  login: "dhruvkulkarni02",
  bio: "Full Stack Developer | Open Source Enthusiast | Building cool things with code.",
  avatar_url: "https://github.com/dhruvkulkarni02.png",
  html_url: "https://github.com/dhruvkulkarni02",
};

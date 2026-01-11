
export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
}

export async function getProfile(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }

  return res.json();
}

export async function getRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch repos');
  }

  const repos: GitHubRepo[] = await res.json();

  // Filter out forks if desired, or sort by stars
  return repos
    .filter(repo => !repo.fork) // Optional: hide forks
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
}

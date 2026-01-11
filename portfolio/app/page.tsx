import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { getProfile, getRepos } from '../lib/github';

export default async function Home() {
  const username = 'dhruvkulkarni02';

  // Fetch data in parallel
  const [profile, repos] = await Promise.all([
    getProfile(username),
    getRepos(username)
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero profile={profile} />

        <section id="projects" className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <a href={profile.html_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
              View all &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

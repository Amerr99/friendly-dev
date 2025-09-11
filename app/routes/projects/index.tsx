import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/projectCard";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects");
  const data = await res.json();
  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  return (
    <>
      <h2 className="font-bold mb-8 text-3xl text-center text-white">
        my projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 items-stretch">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;

import Project from "./Project";
const Projects = () => {
  const projects = [
    {
      project_id: 1,
      projectName: "FindToWatch",
      description: "Movie Finder App with React and Tailwind",
      lang: "JavaScript",
      url: "https://github.com/mrzafrkn/find-to-watch",
    },
    {
      project_id: 2,
      projectName: "FunToDo",
      description: "To-Do App with React",
      lang: "JavaScript",
      url: "https://github.com/mrzafrkn/fun-todo",
    },
    {
      project_id: 3,
      projectName: "Property Pulse",
      description: "Next.js app for listing and searching rental properties",
      lang: "JavaScript",
      url: "https://github.com/mrzafrkn/property-pulse",
    },
    {
      project_id: 4,
      projectName: "Feedback App",
      description: "Feedback App with React",
      lang: "JavaScript",
      url: "https://github.com/mrzafrkn/feedback-app",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="flex-col mt-10 max-w-[1200px] w-full">
        <h3 className="text-3xl text-white">Projects</h3>
        <div className="flex justify-between  mt-10 mb-10 text-center">
          {projects.map((project) => (
            <Project
              key={project.project_id}
              name={project.projectName}
              desc={project.description}
              lang={project.lang}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

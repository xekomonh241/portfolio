import React from "react";
import ProjectItem from "./ProjectItem";
import solshieldImg from "../assets/solshield.png";
import ecshopImg from "../assets/ecshop.png";

const dataProject = [
  {
    title: "Blockchain App",
    tech: "TypeScript",
    img: solshieldImg,
    link: "https://github.com/xekomonh241/solshield",
  },
  {
    title: "Ecommerce Shop App",
    tech: "MERN",
    img: ecshopImg,
    link: "https://github.com/xekomonh241/portfolio-hostinger",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">My projects</p>
      <div className="grid sm:grid-cols-2 gap-12">
        {dataProject.map((project, idx) => (
          <ProjectItem
            key={idx}
            title={project.title}
            tech={project.tech}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import SectionHeading from "../components/SectionHeader";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Tusome",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lz",
    img: "path/to/project1-image.jpg",
    demo: "https://github.com/Zeph180/tusome",
    live: "https://github.com/zeph180"
  },
  {
    name: "TouchCoin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lz",
    img: "path/to/project2-image.jpg",
    demo: "https://github.com/Zeph180/touch-coin",
    live: "https://touch-coin-zeph.netlify.app/"
  },
  {
    name: "SpaceTraveller'sHub",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lz",
    img: "path/to/project2-image.jpg",
    demo: "https://github.com/Zeph180/space-traveller-s-hub",
    live: "https://space-travellers-hub-zeph-gathoni.netlify.app/"
  },
  {
    name: "GreatFarm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lz",
    img: "path/to/project2-image.jpg",
    demo: "https://github.com/Zeph180/Great-farm",
    live: "https://great-farm.netlify.app/"
  },
  {
    name: "MathsMagician",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lz",
    img: "path/to/project3-image.jpg",
    demo: "https://github.com/Zeph180/math-magician",
  },
  {
    name: "BookStore",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lz",
    img: "path/to/project4-image.jpg",
    demo: "https://github.com/Zeph180/book-store",
    live: "https://book-store-zeph.netlify.app/"
  },
  {
    name: "TodoList",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lz",
    img: "path/to/project5-image.jpg",
    demo: "https://github.com/Zeph180/todo-list-react",
    live: "https://to-do-list-with-webpack.netlify.app/"
  },
];

const ProjectsPage = () => {
  return (
    <div id="projects" className="container">
      <SectionHeading sectionName="Some work I've done" />
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
};

export default ProjectsPage;

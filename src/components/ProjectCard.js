const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-img-cont">
      </div>
      <div className="project-info">
        <div className="name-cont">
          <h3 className="project-name">{project.name}</h3>
          <div className="project-line" />
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="name-cont">
          <div className="project-line" style={{ marginTop: "29px"}}/>
          <div className="project-links">
            <button className="project-link">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </button>

            <button className="project-link">
              <a href={project.live}>
                Live
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
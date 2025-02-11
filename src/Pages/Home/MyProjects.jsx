import data from "../../data/index.json";

export default function MyProjects() {
  return (
    <section className="projects-section" id="MyProjects">
      <div className="projects-container-box">
        <div className="projects-container">
          <h2 className="section-heading">My Projects</h2>
          <p className="sub-title">Notable Projects in My Portfolio</p>
        </div>
      </div>
      <div className="projects-section-container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="projects-section-card">
            <div className="projects-section-image">
              <img src={item.src} alt="project-image" />
            </div>
            <div className="projects-section-card-content">
              <div>
                <h3 className="projects-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <button className="btn btn-outline-primary projects-link">
                <a href={item.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

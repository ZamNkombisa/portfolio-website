import data from "../../data/index.json";

export default function MySkills() {
    return (
        <section className="projects-section" id="mySkills">
            <div className="skills-container-box">
            <div className="skills-container">
                <h2 className="section-heading">My Skills</h2>
                <p className="sub-title">Key Technical Expertise</p>
            </div>
            </div>
            <div className="skills-section-container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills-section-card">
                        <div className="skills-section-image">
                            <img src={item.src} alt="tech-stack" />
                        </div>
                        <div className="skills-section-card-content">
                            <h3 className="skills-section-title">
                                {item.title}
                            </h3>
                            <p className="skills-section-description">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
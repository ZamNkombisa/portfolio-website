export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey, I'm Zamuxolo Nkombisa</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Full Stack</span>{" "}
                        <br />
                        Web Developer
                    </h1>
                    <p className="hero-section-description">I enjoy building and maintaining dynamic, responsive and user-friendly websites and web applications.</p>
                </div>
                <div className="tech-stack">
                    <p>Tech Stack</p>
                    <ul>
                        <li>
                            <img src="https://skillicons.dev/icons?i=html,css,javascript,nodejs,express,react,next,mongodb" alt="skills-icons" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hero-section-image">
                <img src="./Assets/ZamPicture.png" alt="" />
            </div>
        </section>
    )
}
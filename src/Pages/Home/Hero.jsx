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
                    <p className="desc">I enjoy building and maintaining dynamic, responsive and user-friendly websites and web applications.</p>
                </div>
                <p className="read-more">Read More in About Section</p>
            </div>
            <div className="hero-section-image">
                <img src="./Assets/ZamPicture.png" alt="" />
            </div>
        </section>
    )
}
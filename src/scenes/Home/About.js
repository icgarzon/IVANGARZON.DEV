import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import skillsUnified from "../../data/skillsUnified";

const AboutBg = () =>
    ReactDOM.createPortal(
        <div
            aria-hidden
            style={{
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "35vw",
                height: "35vw",
                backgroundImage: `url(/assets/images/about/1-1.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
                backgroundSize: "contain",
                pointerEvents: "none",
                zIndex: 5
            }}
        />,
        document.body
    );

function About() {
    return (
        <>
            {/* fixed decorative image via portal to body to avoid transform stacking contexts */}
            <AboutBg />
            <section className="section section-about section-about-1">
                <div className="display-spacing">
                    <Container>
                        <Row>
                            <Col lg={4}></Col>
                            <Col lg={8}>
                                <div className="about-content" style={{ position: "relative", zIndex: 2 }}>
                                    <header className="el-heading">
                                        <h2 className="el-icon">
                                            <span className="el-icon-title">ABOUT ME</span>
                                        </h2>
                                        <h3>
                                            <span>Hello, I am Ivan Carron.</span>
                                        </h3>
                                        <div className="divider divider-1"></div>
                                        <p>I am a software developer with more than 15 years of experience and ample knowledgment of different languages ​​and programming tools that i acquired on the releases of different business models. <strong>Some of my skills are:</strong></p>
                                    </header>
                                    <Row className="pt-30">
                                        {skillsUnified
                                            .filter(s => s.status === 'proficient')
                                            // preserve file order (most recent first as curated in data file)
                                            .map((s, idx) => (
                                                <Col key={idx} lg={6} xs={12} sm={12} md={6}>
                                                    <Col xs={12} sm={12} md={12}>
                                                        <div className="el-card-icon">
                                                            <div className="el-icon">
                                                                <span className="el-icon-icon ti-shortcode"></span>
                                                            </div>
                                                            <div className="content">
                                                                <h5>{s.title}</h5>
                                                                <p>{s.description || s.category}</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Col>
                                            ))}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default About;

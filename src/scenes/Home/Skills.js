import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
//import ProgressBar from "../../components/common/ProgressBar";
import { skills, skills_learn } from '../../data/skills';

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>My</span>
                        </h2>
                    </div>
                    <h3>Skills</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <div className="el-progress">
                                            <h5 className="el-icon gray">
                                                <span className="el-icon-label">{item.title}</span>
                                            </h5>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>


                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>Skills</span>
                        </h2>
                    </div>
                    <h3>Learning</h3>
                </header>
                <Container>
                    <Row>
                        {skills_learn.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <div className="el-progress">
                                            <h5 className="el-icon gray">
                                                <span className="el-icon-label">{item.title}</span>
                                            </h5>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                
            </div>
        </section>
    );
}

export default Resume;

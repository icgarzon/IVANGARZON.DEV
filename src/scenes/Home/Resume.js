import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
import ProgressBar from "../../components/common/ProgressBar";

const skills = [
    {
        title: "PHP",
        percent: 90,
    },
    {
        title: "MYSQL/Aurora",
        percent: 90,
    },
    {
        title: "JavaScript",
        percent: 90,
    },
    {
        title: "iOnic",
        percent: 60,
    },
    {
        title: "Electron",
        percent: 60,
    },
    {
        title: "ReactJS",
        percent: 40,
    },
    {
        title: "NodeJS",
        percent: 50,
    },
    {
        title: "HTML5/CSS3",
        percent: 90,
    },
    {
        title: "UI Design",
        percent: 95,
    },
    {
        title: "AWS",
        percent: 70,
    },
    {
        title: "BuddyWorks",
        percent: 70,
    },
    {
        title: "Terminal",
        percent: 80,
    },
    {
        title: "jQuery",
        percent: 90,
    },
    {
        title: "Api Integrations",
        percent: 90,
    },
    {
        title: "Git",
        percent: 80,
    }
];
const education = [
    {
        title: "Jorge Tadeo University",
        subtitle: "Media Production | Bogotá",
        description: "-",
        date: "(2008-2010)",
        icon: "ti-crown",
    },
    {
        title: "Javeriana University",
        subtitle: "3D Model and Comubustion | Bogotá",
        description: "",
        date: "(2016-2018)",
        icon: "ti-cup",
    },
    {
        title: "Los Libertadores University",
        subtitle: "Graphic Design | Bogotá",
        description: "",
        date: "(2016-2018)",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Platzi",
        subtitle: "PHP Advanced",
        description: "",
        date: "(Auto-Self from 2008 - Certified on 2019)",
        icon: "ti-pin2",
    },
    {
        title: "Platzi",
        subtitle: "Computer Security",
        description: "",
        date: "(2020)",
        icon: "ti-magnet",
    },
    {
        title: "Platzi",
        subtitle: "iOnic 4",
        description: "",
        date: "(2018)",
        icon: "ti-mobile",
    },
    {
        title: "Platzi",
        subtitle: "AWS Cloud Fundamentals Course",
        description: "",
        date: "(2017)",
        icon: "ti-cloud",
    },
    {
        title: "Platzi",
        subtitle: "MYSQL",
        description: "",
        date: "(Auto-Self from 2008 - Certified in Process)",
        icon: "ti-bar-chart",
    },
    {
        title: "Platzi",
        subtitle: "TypeScript | ReactJS | iOnic5",
        description: "",
        date: "(Actually)",
        icon: "ti-ruler-alt-2",
    }
];
const experience = [
    {
        title: "Fullstack Developer",
        subtitle: "SUMR | Bogotá",
        description: "",
        date: "(2016-2018)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Fullstack Developer",
        subtitle: "FONTUR - Cotelco | Bogotá",
        description: "",
        date: "(2016-2018)",
        icon: "ti-location-arrow",
    },
    {
        title: "Fullstack Developer",
        subtitle: "Externado University | Bogotá",
        description: "",
        date: "(2007-Actually)",
        icon: "ti-book",
    },
    {
        title: "Fullstack Developer",
        subtitle: "Rosario University | Bogotá",
        description: "",
        date: "(2013-2018)",
        icon: "ti-book",
    },
    {
        title: "E-Learning Developer",
        subtitle: "World Food Programme | Bogotá",
        description: "",
        date: "(2011-2013)",
        icon: "ti-world",
    },
    {
        title: "E-Learning Developer",
        subtitle: "FAO | Bogotá",
        description: "",
        date: "(2010-2013)",
        icon: "ti-world",
    }
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row education">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.subtitle}</h6>
                                                </div>
                                                {/*<div className="resume-body">
                                                    <p></p>
                                                </div>*/}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row experience">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} percent={item.percent} />
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

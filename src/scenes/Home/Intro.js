import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/1-1.jpg)` }}>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 120,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
                className="el-particles"
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">I am Ivan Garzón.</span>
                        </p>
                        <h1>
                            I am a{" "}
                            <TextLoop>
                                <span>Software Developer</span>
                                <span>JS Evangelizer</span>
                                <span>ReactJS Student</span>
                            </TextLoop>
                            <br />
                            <div className="mycity">Bogotá - Colombia</div>
                        </h1>
                        {/*<button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <span className="text">My Portfolio</span>
                        </button>
                        <button className="button button-lg">
                            <span className="text">Read More</span>
                        </button>*/}
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;

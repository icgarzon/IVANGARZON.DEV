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
                            <span className="el-icon-title">I am Ivan Carron.</span>
                        </p>
                        <h1>
                            I am a{" "}
                            <TextLoop>
                                <span>Software Dev</span>
                                <span>JavaScript Dev</span>
                                <span>ReactJS Dev</span>
                                <span>React Native Dev</span>
                                <span>NodeJS Dev</span>
                                <span>ElectronJS Dev</span>
                                <span>Ionic Dev</span>
                                <span>PHP Dev</span>
                            </TextLoop>
                            <br />
                            <div className="mycity">Brisbane - Australia</div>
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

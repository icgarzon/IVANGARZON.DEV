import React from "react";
import TextLoop from "react-text-loop";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/1-1.jpg)` }}>
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">I am Ivan Carron.</span>
                        </p>
                        <h1>
                            I am {" "}
                            <TextLoop>
                                <span>a Software Dev</span>
                                <span>a JavaScript Dev</span>
                                <span>a ReactJS Dev</span>
                                <span>a NodeJS Dev</span>
                                <span>an ElectronJS Dev</span>
                                <span>an NestJs Dev</span>
                                <span>an Angular Dev</span>
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

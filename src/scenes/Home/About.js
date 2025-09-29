import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

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
                                        <p>I am a software developer with more than 10 years of experience and ample knowledgment of different languages ​​and programming tools that i acquired on the releases of different business models. <strong>Some of my skills are:</strong></p>
                                    </header>
                                    <Row className="pt-30">
                                        <Col lg={6} xs={12} sm={12} md={6}>
                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-shortcode"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>PHP</h5>
                                                        <p>Database connections (mysqli and PDO) and information handler, classes, composer integrations, sessions manager, back-end, cronjobs, third api consume.</p>
                                                    </div>
                                                </div>    
                                            </Col>
                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-unlock"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>MYSQL / RDS / Aurora</h5>
                                                        <p>Build and improve the performance of databases estructure, manage of store procedures, functions, triggers, views.</p>
                                                    </div>
                                                </div>    
                                            </Col>
                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-ruler-pencil"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>HTML5, Css3</h5>
                                                        <p>Construction of UI, responsive and Interactive for better UX and Load Speed. Build of Html Mailing for mail marketing with best practices and good look and feeling</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-cloud-up"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>AWS IT</h5>
                                                        <p>Deeply knoledgment of basic estructure of AWS Cloud, deployment of EC2 infraestructure with ELB, AutoScaling Services, AMI Templates. Use of S3 as host of static sites, performance of speed with Cloudfront and Security with WAF and Guard Duty. Implementation of Lambda functions with NodeJS, Send Mail with SES and SNS for manage Reputation. Setup, manage and use of Route53, Certificate Manager, Api Gateway, CodeCommit, Rekoginition, SQS.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Col>
                                        <Col lg={6} xs={12} sm={12} md={6}>
                                            
                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-mobile"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>iOnic</h5>
                                                        <p>UI Builder (Angular JS, Learning ReactJS version now) with API integrations (Consume of JSON Data), use of native hardware with Capacitor (Camera, FingerPrint Authentication), Integration with PushNotifications Trough FireBase, Deployment Process to PlayStore / App Store. </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-ruler-pencil"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>AngularJS</h5>
                                                        <p>UI Builder with API integrations (Back-End), login and sesions handler, manage of SAAS, built, lifecycle of components, websocket integrations specially for chats.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-thought"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>NodeJS</h5>
                                                        <p>Websocket Communications, Build of Large XLSX download files, Lambda Functions for Serverless (SES,SNS,SQS) on AWS</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-desktop"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>ElectronJS</h5>
                                                        <p>Adaptation of webapps and components to package on "native apps" for MacOS and Windows installation.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12} sm={12} md={12}>
                                                <div className="el-card-icon">
                                                    <div className="el-icon">
                                                        <span className="el-icon-icon ti-bell"></span>
                                                    </div>
                                                    <div className="content">
                                                        <h5>ReactJS</h5>
                                                        <p>Projects developed based on templates but integrated to data with apis, webpack configuration, actually im in process of learning deeply this library and get best practices to improve my skill and knowledgment of this.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Col>
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

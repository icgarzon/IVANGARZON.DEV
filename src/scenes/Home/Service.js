import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Data
import service from "../../data/service";

function Service() {

    return (
        <section className="section section-service section-service-5">
            <div className="display-spacing mb-0">
                <Container>
                    <header className="el-heading el-heading-center">
                        <div className="el-icon">
                            <h2 className="el-icon-title">
                                <span>SERVICE</span>
                            </h2>
                        </div>
                        <h3>Let's See My Services</h3>
                        <div className="divider divider-1-reverse divider-1-1"></div>
                        <div className="divider divider-1-reverse divider-1-2"></div>
                    </header>
                    <Row>
                        {service.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="service-wrap" key={index}>
                                    <div className="service-item">
                                        <div className="service-head">
                                            <span className={`el-icon-icon ${item.icon}`}></span>
                                        </div>
                                        <div className="service-body">
                                            <h3>{item.title}</h3>
                                            <h4>{item.mode}</h4>
                                            <p>{item.subtitle}</p>
                                        </div>
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

export default Service;

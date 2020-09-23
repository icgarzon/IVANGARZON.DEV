import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";

// Components
import Headline from "../../components/common/Headline";

const portfolio = [
    {
        name: "Front-End",
        items: [
            {
                id: 0,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-1.jpg",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                id: 1,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-2.jpg",
                thumbnail: "/assets/images/portfolio/1-2.jpg",
            },
            {
                id: 2,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-3.jpg",
                thumbnail: "/assets/images/portfolio/1-3.jpg",
            },
            {
                id: 3,
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
            {
                id: 4,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-5.jpg",
                thumbnail: "/assets/images/portfolio/1-5.jpg",
            },
            {
                id: 5,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-6.jpg",
                thumbnail: "/assets/images/portfolio/1-6.jpg",
            },
            {
                id: 6,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-7.jpg",
                thumbnail: "/assets/images/portfolio/1-7.jpg",
            },
            {
                id: 7,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-8.jpg",
                thumbnail: "/assets/images/portfolio/1-8.jpg",
            },
            {
                id: 8,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-9.jpg",
                thumbnail: "/assets/images/portfolio/1-9.jpg",
            },
            {
                id: 9,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-10.jpg",
                thumbnail: "/assets/images/portfolio/1-10.jpg",
            },
        ],
    },
    {
        name: "Api Integrations",
        items: [
            {
                id: 0,
                title: "VTEX",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-1.jpg",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                id: 1,
                title: "Twilio",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-2.jpg",
                thumbnail: "/assets/images/portfolio/1-2.jpg",
            },
            {
                id: 2,
                title: "Facebook",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-3.jpg",
                thumbnail: "/assets/images/portfolio/1-3.jpg",
            },
            {
                id: 3,
                title: "Whatsapp",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
            {
                id: 3,
                title: "Gateway Payment",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
            {
                id: 3,
                title: "Google Auth",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
            {
                id: 3,
                title: "FullContact",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
            {
                id: 3,
                title: "Aws Rekognition",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
            {
                id: 3,
                title: "Aws Bulk SES",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            }
        ],
    },
    {
        name: "Mobile Development",
        items: [
            {
                id: 4,
                title: "SUMR iOs",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-5.jpg",
                thumbnail: "/assets/images/portfolio/1-5.jpg",
            },
            {
                id: 5,
                title: "SUMR Android",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-6.jpg",
                thumbnail: "/assets/images/portfolio/1-6.jpg",
            }
        ],
    },
    {
        name: "NodeJs",
        items: [
            {
                id: 7,
                title: "Websocket",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-8.jpg",
                thumbnail: "/assets/images/portfolio/1-8.jpg",
            }
        ],
    },
    {
        name: "AWS IT",
        items: [
            {
                id: 7,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-8.jpg",
                thumbnail: "/assets/images/portfolio/1-8.jpg",
            },
            {
                id: 8,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-9.jpg",
                thumbnail: "/assets/images/portfolio/1-9.jpg",
            },
            {
                id: 9,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-10.jpg",
                thumbnail: "/assets/images/portfolio/1-10.jpg",
            },
        ],
    }
];

const images = [
    {
        src: "/assets/images/portfolio/1-1.jpg",
    },
    {
        src: "/assets/images/portfolio/1-2.jpg",
    },
    {
        src: "/assets/images/portfolio/1-3.jpg",
    },
    {
        src: "/assets/images/portfolio/1-4.jpg",
    },
    {
        src: "/assets/images/portfolio/1-5.jpg",
    },
    {
        src: "/assets/images/portfolio/1-6.jpg",
    },
    {
        src: "/assets/images/portfolio/1-7.jpg",
    },
    {
        src: "/assets/images/portfolio/1-8.jpg",
    },
    {
        src: "/assets/images/portfolio/1-9.jpg",
    },
    {
        src: "/assets/images/portfolio/1-10.jpg",
    },
];

function Portfolio() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} onClick={() => toggleLightbox(item.id)}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <span className="el-icon-icon ti-fullscreen"></span>
                                                        </button>
                                                        <span>{item.title}</span>
                                                        <h3>{item.subtitle}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
                <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
    );
}

export default Portfolio;
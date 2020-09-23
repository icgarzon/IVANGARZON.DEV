import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";

const service = [
    {
        title: "UI Development",
        mode: "Front-End",
        subtitle: "Web/Mobile WebApp or Websites estructuration and interface activation (optimized) build.",
        link: "/service-details",
        icon: "ti-ruler-pencil",
    },
    {
        title: "UX Design",
        mode: "Front-End",
        subtitle: "Develop of interactive interfaces that helps user to have a good experience on navigation.",
        link: "/service-details",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Api Connections",
        mode: "Back-End",
        subtitle: "Third api's connections to consume, save, analyze and show data.",
        link: "/service-details",
        icon: "ti-control-shuffle",
    },
    {
        title: "Mobile APPS",
        mode: "Front-End",
        subtitle: "iOnic build UI and use some native hardware functions and connections with databases.",
        link: "/service-details",
        icon: "ti-cup",
    },
    {
        title: "AWS Computing",
        mode: "IT helper",
        subtitle: "Help to S3 and EC2, ELBS, AutoEscaling deploy, CloudFront Optimization",
        link: "/service-details",
        icon: "ti-cloud",
    },
    {
        title: "AWS RDS",
        mode: "IT helper",
        subtitle: "RDS estructuration and Querie Optimization for best Performance on Production Process Data",
        link: "/service-details",
        icon: "ti-cloud-down",
    },
    {
        title: "Websocket",
        mode: "Front-Back-End",
        subtitle: "Real-Time applications integrations for best user experience and real data update on his interface",
        link: "/service-details",
        icon: "ti-wand",
    }
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: 50,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 100,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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
                    <Slider className="el-slider el-slider-plr--15 mb-30" {...sliderSettings}>
                        {service.map((item, index) => (
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
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Service;

import React, { Suspense }  from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link, useRouteMatch, useParams } from "react-router-dom";
// Components
import Headline from "../../components/common/Headline";
// Data
import PortfolioList from "../../data/portfolio";

function Portfolio() {

    const { path } = useRouteMatch();
    let { id } = useParams();

    if(id){
        
        const Component = React.lazy(() =>
                        import(`../Portfolio/p_${id}`).catch(() =>
                                import(`../../components/common/Error404`)
                            )
                        );

        return(
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            </>
        )

    }else{

        return (
            <section className="section section-blog section-blog-1">
                <div className="display-spacing">
                    <Container className="container">
                        <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                        <Container>
                            <Row>
                                {PortfolioList.map((item, index) => (
                                    <Col key={index} sm={6} xl={4}>
                                        <div key={index} className="post-item">
                                            <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>
                                                <div className="post-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                            </Link>
                                            <div className="post-content">
                                                <div className="el-icon">
                                                    <span className={`el-icon-icon ${item.icon}`}></span>
                                                </div>
                                                <div className="post-data">
                                                    <h4 className="post-title">
                                                        <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>{item.title}</Link>
                                                    </h4>
                                                    <div className="post-date">
                                                        <i className="ti-time"></i>
                                                        {item.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>

                    </Container>
                </div>
            </section>
        );

    }
}

export default Portfolio;

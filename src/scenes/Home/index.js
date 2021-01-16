import React, { useEffect } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";

// Sections

import About from "./About";
import Intro from "./Intro";
import Header from "./Header";
import Resume from "./Resume";
import Skills from "./Skills";
import Service from "./Service";
import Portfolio from "./Portfolio";

// Components
import Helmet from "../../components/common/Helmet";
import Switch from "../../components/common/Switch";
import RedirectAs404 from "../../components/common/RedirectAs404";

const routes = [
    {
        path: "intro",
        component: <Intro />,
    },
    {
        path: "about",
        component: <About />,
    },
    {
        path: "resume",
        component: <Resume />,
    },
    {
        path: "skills",
        component: <Skills />,
    },
    {
        path: "service",
        component: <Service />,
    },
    {
        path: "portfolio",
        component: <Portfolio />,
    },
    {
        path: "portfolio/:id",
        component: <Portfolio />,
    }
];

function Home() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-1 skin-1";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Helmet title="Ivan Camilo Garzon" />
            <Header />
            <Switch>
                <Route path={path} exact>
                    <Redirect
                        to={{
                            pathname:'intro',
                        }}
                    />
                </Route>
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`} exact>
                        {item.component}
                    </Route>
                ))}
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
}

export default Home;

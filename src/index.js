import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";
// Scenes
import Home from "./scenes/Home";
// Components
import Error404 from "./components/common/Error404";
import RedirectAs404 from "./components/common/RedirectAs404";

const Root = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} />
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
    </BrowserRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();

import React, { useState } from "react";
import { useRouteMatch, NavLink, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const links = [
    {
        title: "Home",
        path: "intro",
    },
    {
        title: "About",
        path: "about",
    },
    {
        title: "Resume",
        path: "resume",
    },
    {
        title: "Skills",
        path: "skills",
    },
    {
        title: "Service",
        path: "service",
    },
    {
        title: "Portfolio",
        path: "portfolio",
    }/*,
    {
        title: "Blog",
        path: "blog",
    }*/
];

function Header() {
    let { url } = useRouteMatch();

    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    return (
        <>
            <header className="app-header app-header-1">
                <div className="header-logo">
                    <Link to={``.replace(/([^:])(\/\/+)/g, "$1/")}>ICGC</Link>
                </div>
                <button className="button button-menu" onClick={(e) => handleClick(e)}>
                    <span></span>
                </button>
                <ul className="header-dots">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="circle"></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="header-menu">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="header-follow">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/icgarzon/?locale=en_US" target="_new">
                                <i className="ti-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/icgarzon" target="_new">
                                <i className="ti-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/icgarzon" target="_new">
                                <i className="ti-facebook"></i>
                            </a>
                        </li>
                    </ul>
                    <p>Follow Me</p>
                </div>
            </header>
            <div className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-menu">
                    <div className="logo">
                        <Link to={`url`.replace(/([^:])(\/\/+)/g, "$1/")}>ICGC</Link>
                    </div>
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <ul className="sidenav-nav">
                        {links.map((item, index) => (
                            <li key={index} onClick={(e) => handleClick(e)}>
                                <NavLink to={`${url}${item.path}`.replace(/([^:])(\/\/+)/g, "$1/")} activeClassName="active">
                                    <span className="anchor">{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="sidenav-links">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/icgarzon/?locale=en_US" target="_new">
                                    <FaLinkedin className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/icgarzon" target="_new">
                                    <FaGithub className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/icgarzon" target="_new">
                                    <FaFacebook className="icon" />
                                </a>
                            </li>
                        </ul>
                        <p>Follow Me</p>
                    </div>
                </div>
                <span className="sidenav-close" />
            </div>
        </>
    );
}

export default Header;

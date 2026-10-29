import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";

import logo from "/src/assets/logo.svg"; // Adjust path if Navbar.jsx is in another folder

import {
  BiHomeAlt,
  BiUser,
  BiFile,
  BiBriefcase,
  BiServer,
  BiEnvelope,
  BiRightArrowAlt,
  BiCodeAlt,
} from "react-icons/bi";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: BiHomeAlt },
    { to: "/about", label: "About", icon: BiUser },
    { to: "/skills", label: "Skills", icon: BiCodeAlt },
    { to: "/resume", label: "Resume", icon: BiFile },
    { to: "/portfolio", label: "Portfolio", icon: BiBriefcase },
    { to: "/services", label: "Services", icon: BiServer },
    { to: "/contact", label: "Contact", icon: BiEnvelope },
  ];

  return (
    <BSNavbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top"
      className="portfolio-navbar"
    >
      <Container>
        <BSNavbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          className="portfolio-brand"
        >
          <img src={logo} alt="AntonyTorotich" className="portfolio-logo" />
        </BSNavbar.Brand>

        <BSNavbar.Toggle
          aria-controls="portfolio-navbar-nav"
          className="navbar-toggle"
          aria-label="Toggle navigation"
        />

        <BSNavbar.Collapse id="portfolio-navbar-nav">
          <Nav className="portfolio-nav ms-auto align-items-lg-center">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Nav.Link
                  key={item.to}
                  as={NavLink}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setExpanded(false)}
                  className={({ isActive }) =>
                    `portfolio-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  <Icon className="nav-icon" />
                  <span className="portfolio-nav-text">{item.label}</span>
                </Nav.Link>
              );
            })}

            <Link
              to="/contact"
              onClick={() => setExpanded(false)}
              className="navbar-cta"
            >
              Hire Me
              <BiRightArrowAlt className="cta-icon" />
            </Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";

import {
  BiHomeAlt,
  BiUser,
  BiFile,
  BiBriefcase,
  BiServer,
  BiEnvelope,
  BiRightArrowAlt,
} from "react-icons/bi";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: BiHomeAlt },
    { to: "/about", label: "About", icon: BiUser },
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
        {/* Brand */}
        <BSNavbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          className="portfolio-brand"
        >
          <span className="brand-first">Antony</span>
          <span className="brand-last">Torotich</span>
        </BSNavbar.Brand>

        {/* Mobile toggle */}
        <BSNavbar.Toggle
          aria-controls="portfolio-navbar-nav"
          className="navbar-toggle"
        />

        <BSNavbar.Collapse id="portfolio-navbar-nav">
          {/* Navigation */}
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

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setExpanded(false)}
              className="navbar-cta"
            >
              Hire Me
              <BiRightArrowAlt />
            </Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;

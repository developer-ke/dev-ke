import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typed from "typed.js";
import { personalInfo } from "../data/personalInfo";
import {
  BiChevronDown,
  BiCodeAlt,
  BiBriefcaseAlt2,
  BiCheckCircle,
} from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: personalInfo.roles,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSection = (section) => {
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xl={9} lg={10} className="text-center" data-aos="fade-up">
            {/* Availability */}
            <div className="hero-availability">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="hero-title">
              Antony <span>Torotich</span>
            </h1>

            {/* Role */}
            <div className="hero-role">
              <span>I'm a </span>
              <strong ref={typedRef}></strong>
            </div>

            {/* Description */}
            <p className="hero-description">{personalInfo.bio}</p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <Link
                to={"/portfolio"}
                className="hero-btn hero-btn-primary text-decoration-none"
              >
                <BiBriefcaseAlt2 />
                View My Work
              </Link>

              <Link
                to="/contact"
                className="hero-btn hero-btn-outline text-decoration-none"
              >
                <BiCodeAlt />
                Let's Work Together
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-icon">
                  <BiBriefcaseAlt2 />
                </div>
                <div>
                  <h4>10+</h4>
                  <span>Projects Built</span>
                </div>
              </div>

              <div className="hero-stat">
                <div className="stat-icon">
                  <BiCodeAlt />
                </div>
                <div>
                  <h4>Laravel</h4>
                  <span>Backend Expertise</span>
                </div>
              </div>

              <div className="hero-stat">
                <div className="stat-icon">
                  <BiCodeAlt />
                </div>
                <div>
                  <h4>REST APIs</h4>
                  <span>System Integrations</span>
                </div>
              </div>

              <div className="hero-stat">
                <div className="stat-icon">
                  <BiCheckCircle />
                </div>
                <div>
                  <h4>Freelance</h4>
                  <span>Project-Based</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

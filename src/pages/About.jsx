import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BiCodeAlt,
  BiServer,
  BiData,
  BiCheckCircle,
  BiBriefcase,
  BiRightArrowAlt,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/personalInfo";

const About = () => {
  return (
    <section className="about-page py-5">
      {/* Hero */}
      <div className="about-hero">
        <Container>
          <div className="about-hero-content text-center">
            <span className="about-eyebrow">ABOUT ME</span>

            <h1>
              Building Digital Solutions
              <span> That Make an Impact.</span>
            </h1>

            <p>
              I'm Antony Torotich, a Full-Stack Developer focused on building
              reliable, scalable, and user-friendly web applications for
              businesses, organizations, and individuals.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Introduction */}
        <Row className="align-items-center about-intro">
          <Col lg={5} className="mb-5 mb-lg-0" data-aos="fade-right">
            <div className="about-profile-card">
              <div className="profile-initials">AT</div>

              <div className="profile-content">
                <h3>Antony Torotich</h3>

                <p>Full-Stack Developer</p>

                <div className="profile-status">
                  <span></span>
                  Available for opportunities
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <span className="about-section-label">WHO I AM</span>

            <h2>
              Developer. Problem Solver.
              <span> Builder.</span>
            </h2>

            <p className="about-lead">{personalInfo.description}</p>

            <p>
              I specialize in developing full-stack web applications using
              technologies such as PHP, Laravel, JavaScript, React, SQL and
              Bootstrap. My work ranges from business management systems and ERP
              platforms to CMS solutions, payment integrations and custom web
              applications.
            </p>

            <p>
              I enjoy turning complex requirements into simple, maintainable and
              scalable software. Whether I'm building a system from scratch or
              improving an existing application, I focus on clean architecture,
              performance, security and a great user experience.
            </p>

            <div className="about-actions">
              <Link to="/portfolio" className="about-primary-btn">
                Explore My Work
                <BiRightArrowAlt />
              </Link>

              <Link to="/contact" className="about-secondary-btn">
                Let's Work Together
              </Link>
            </div>
          </Col>
        </Row>

        {/* What I Do */}
        <div className="about-section-block">
          <div className="text-center mb-5">
            <span className="about-eyebrow">WHAT I DO</span>

            <h2 className="section-heading">
              Turning Ideas Into
              <span> Working Software</span>
            </h2>

            <p className="section-description">
              I work across the entire development lifecycle, from database
              design and backend architecture to responsive interfaces and
              third-party integrations.
            </p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="about-feature-card">
                <div className="feature-icon">
                  <BiCodeAlt />
                </div>

                <h4>Full-Stack Development</h4>

                <p>
                  Complete web applications built with modern frontend and
                  backend technologies.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="about-feature-card">
                <div className="feature-icon">
                  <BiServer />
                </div>

                <h4>Backend Engineering</h4>

                <p>
                  Robust Laravel and PHP backends with APIs, authentication,
                  business logic and scalable architecture.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="about-feature-card">
                <div className="feature-icon">
                  <BiData />
                </div>

                <h4>Database Solutions</h4>

                <p>
                  Well-structured databases designed for performance,
                  reliability and maintainability.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="about-feature-card">
                <div className="feature-icon">
                  <BiBriefcase />
                </div>

                <h4>Business Systems</h4>

                <p>
                  Custom ERP, CMS, POS, warehouse and management systems
                  designed around real business workflows.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Approach */}
        <Row className="about-approach align-items-center">
          <Col lg={6} data-aos="fade-right">
            <span className="about-section-label">MY APPROACH</span>

            <h2>
              More Than Just
              <span> Writing Code.</span>
            </h2>

            <p>
              Good software is not only about making something work. It's about
              understanding the problem, designing the right solution and
              building something that can grow with its users.
            </p>

            <p>
              I approach every project with a focus on simplicity,
              maintainability, security and long-term value.
            </p>
          </Col>

          <Col lg={6} data-aos="fade-left">
            <div className="about-values">
              <div className="about-value">
                <BiCheckCircle />
                <div>
                  <h5>Clean Architecture</h5>
                  <p>
                    Structured and maintainable code that's easier to extend.
                  </p>
                </div>
              </div>

              <div className="about-value">
                <BiCheckCircle />
                <div>
                  <h5>Problem Solving</h5>
                  <p>
                    Understanding the real problem before building the solution.
                  </p>
                </div>
              </div>

              <div className="about-value">
                <BiCheckCircle />
                <div>
                  <h5>Performance & Security</h5>
                  <p>
                    Applications designed with performance and security in mind
                    from the beginning.
                  </p>
                </div>
              </div>

              <div className="about-value">
                <BiCheckCircle />
                <div>
                  <h5>Long-Term Thinking</h5>
                  <p>
                    Building systems that can evolve as requirements change.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* CTA */}
        <div className="about-cta">
          <div>
            <span>HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>
          </div>

          <Link to="/contact" className="about-cta-btn">
            Start a Conversation
            <BiRightArrowAlt />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;

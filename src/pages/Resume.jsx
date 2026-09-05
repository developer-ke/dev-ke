import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { personalInfo } from "../data/personalInfo";
import { experience } from "../data/experience";
import { education } from "../data/education";
import {
  BiMap,
  BiPhone,
  BiEnvelope,
  BiBriefcase,
  BiBookOpen,
  BiCheck,
  BiCodeAlt,
} from "react-icons/bi";

const Resume = () => {
  return (
    <section id="resume" className="resume-section py-5 my-5">
      <Container>
        {/* Section Header */}
        <div className="section-title text-center mb-5">
          <span className="section-eyebrow">MY JOURNEY</span>

          <h2>
            Resume & <span>Experience</span>
          </h2>

          <p>
            A full-stack software developer focused on building scalable web
            applications, business systems, APIs, and digital solutions that
            solve real-world problems.
          </p>
        </div>

        <Row className="g-5">
          {/* LEFT COLUMN */}
          <Col lg={5} data-aos="fade-right">
            {/* Summary */}
            <div className="resume-block">
              <div className="resume-heading">
                <div className="resume-heading-icon">
                  <BiCodeAlt />
                </div>

                <div>
                  <span>PROFILE</span>
                  <h3>Professional Summary</h3>
                </div>
              </div>

              <div className="resume-summary">
                <h4>{personalInfo.name}</h4>

                <p className="resume-role">Full-Stack Software Developer</p>

                <p>
                  Results-driven developer with hands-on experience designing,
                  developing, and deploying modern web applications and business
                  management systems.
                </p>

                <p>
                  Experienced in Laravel, PHP, JavaScript, React, SQL, REST
                  APIs, payment integrations, CMS platforms, ERP systems, and
                  database-driven applications.
                </p>
              </div>

              {/* Contact */}
              <div className="resume-contact">
                <div className="resume-contact-item">
                  <BiMap />
                  <div>
                    <span>Location</span>
                    <strong>Kenya</strong>
                  </div>
                </div>

                <div className="resume-contact-item">
                  <BiPhone />
                  <div>
                    <span>Phone</span>
                    <strong>{personalInfo.phone}</strong>
                  </div>
                </div>

                <div className="resume-contact-item">
                  <BiEnvelope />
                  <div>
                    <span>Email</span>
                    <strong>{personalInfo.email}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="resume-block mt-5">
              <div className="resume-heading">
                <div className="resume-heading-icon">
                  <BiBookOpen />
                </div>

                <div>
                  <span>ACADEMIC BACKGROUND</span>
                  <h3>Education</h3>
                </div>
              </div>

              <div className="resume-timeline">
                {education.map((edu) => (
                  <div className="resume-timeline-item" key={edu.id}>
                    <div className="timeline-dot"></div>

                    <div className="timeline-content">
                      <span className="timeline-period">{edu.period}</span>

                      <h4>{edu.degree}</h4>

                      <h5>{edu.institution}</h5>

                      {edu.achievements?.length > 0 && (
                        <ul>
                          {edu.achievements.map((achievement, index) => (
                            <li key={index}>
                              <BiCheck />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col lg={7} data-aos="fade-left">
            {/* Experience */}
            <div className="resume-block">
              <div className="resume-heading">
                <div className="resume-heading-icon">
                  <BiBriefcase />
                </div>

                <div>
                  <span>CAREER</span>
                  <h3>Professional Experience</h3>
                </div>
              </div>

              <div className="resume-timeline experience-timeline">
                {experience.map((exp) => (
                  <div className="resume-timeline-item" key={exp.id}>
                    <div className="timeline-dot"></div>

                    <div className="timeline-content">
                      <div className="experience-top">
                        <span className="timeline-period">{exp.period}</span>
                      </div>

                      <h4>{exp.title}</h4>

                      <h5>{exp.company}</h5>

                      <ul>
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index}>
                            <BiCheck />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Expertise */}
            <div className="resume-expertise mt-5">
              <div className="resume-heading">
                <div className="resume-heading-icon">
                  <BiCodeAlt />
                </div>

                <div>
                  <span>TECHNICAL FOCUS</span>
                  <h3>Core Expertise</h3>
                </div>
              </div>

              <div className="expertise-grid">
                <span>Laravel & PHP</span>
                <span>React & JavaScript</span>
                <span>REST APIs</span>
                <span>MySQL & SQL</span>
                <span>ERP Systems</span>
                <span>M-Pesa Integration</span>
                <span>CMS Development</span>
                <span>Git & GitHub</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;

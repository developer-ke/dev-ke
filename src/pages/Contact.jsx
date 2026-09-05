import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BiMap,
  BiEnvelope,
  BiPhone,
  BiCheckCircle,
  BiSend,
} from "react-icons/bi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5 bg-light my-5">
      <Container>
        {/* Section Header */}
        <div className="section-title text-center mb-5">
          <h2>
            Let's <span style={{ color: "#149ddd" }}>Connect</span>
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Have a project in mind, need a web application, or looking for a
            developer to join your team? I'd love to hear from you.
          </p>
        </div>

        <Row className="justify-content-center">
          {/* Contact Information */}
          <Col lg={8}>
            <div className="contact-card bg-white rounded-4 shadow-sm p-4 p-md-5">
              <Row className="g-4">
                {/* Location */}
                <Col md={4}>
                  <div className="contact-item text-center h-100">
                    <div className="contact-icon mx-auto mb-3">
                      <BiMap />
                    </div>

                    <h5>Location</h5>

                    <p className="text-muted mb-0">{personalInfo.city}</p>
                  </div>
                </Col>

                {/* Email */}
                <Col md={4}>
                  <div className="contact-item text-center h-100">
                    <div className="contact-icon mx-auto mb-3">
                      <BiEnvelope />
                    </div>

                    <h5>Email</h5>

                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="contact-link"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </Col>

                {/* Phone */}
                <Col md={4}>
                  <div className="contact-item text-center h-100">
                    <div className="contact-icon mx-auto mb-3">
                      <BiPhone />
                    </div>

                    <h5>Phone</h5>

                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="contact-link"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </Col>
              </Row>

              {/* Divider */}
              <hr className="my-5" />

              {/* Availability */}
              <div className="text-center mb-4">
                <div className="availability-badge">
                  <BiCheckCircle />
                  <span>Available for opportunities</span>
                </div>

                <h4 className="mt-3 mb-2">
                  Let's build something great together.
                </h4>

                <p className="text-muted mb-0">
                  I'm open to full-time roles, freelance projects,
                  collaborations and interesting software development
                  opportunities.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center mb-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-lg px-4"
                >
                  <BiSend className="me-2" />
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="text-center">
                <p className="text-muted small mb-3">You can also find me on</p>

                <div className="contact-socials">
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={personalInfo.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import { personalInfo } from "../../data/personalInfo";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: personalInfo.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: personalInfo.social.github,
      label: "GitHub",
    },
    {
      icon: FaWhatsapp,
      url: personalInfo.social.whatsapp,
      label: "WhatsApp",
    },
    {
      icon: FaTwitter,
      url: personalInfo.social.twitter,
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      url: personalInfo.social.instagram,
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      url: personalInfo.social.facebook,
      label: "Facebook",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="portfolio-footer">
      <Container>
        {/* Main Footer */}
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            {/* Brand */}
            <div className="footer-brand mb-3">
              <h3>
                Antony <span>Torotich</span>
              </h3>

              <p>
                Full-Stack Developer building scalable web applications,
                business systems and digital solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="footer-socials">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="footer-social-link mx-2"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <Row className="align-items-center gy-3">
          <Col md={6} className="text-center text-md-start">
            <div className="footer-copyright">
              © {year} <strong>Antony Torotich</strong>. All rights reserved.
            </div>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="footer-credit">
              Designed & Developed by{" "}
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                developer-ke
              </a>
            </div>
          </Col>
        </Row>

        {/* Back To Top */}
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </Container>
    </footer>
  );
};

export default Footer;

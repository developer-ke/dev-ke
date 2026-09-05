import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BiCode,
  BiLayer,
  BiGitBranch,
  BiMobile,
  BiCog,
  BiPalette,
  BiWrench,
  BiBulb,
  BiRightArrowAlt,
} from "react-icons/bi";
const services = [
  {
    icon: BiCode,
    title: "Custom Web Development",
    description:
      "Scalable web applications tailored to your business needs, from idea to deployment.",
  },
  {
    icon: BiLayer,
    title: "Full-Stack Development",
    description:
      "Complete frontend and backend solutions with clean architecture and seamless integration.",
  },
  {
    icon: BiGitBranch,
    title: "Backend & API Development",
    description:
      "Secure REST APIs and integrations that connect applications, services, and business systems.",
  },
  {
    icon: BiMobile,
    title: "Responsive Web Design",
    description:
      "Modern interfaces that provide a consistent experience across phones, tablets, and desktops.",
  },
  {
    icon: BiCog,
    title: "CMS Development",
    description:
      "Powerful CMS and WordPress solutions that make managing digital content simple and efficient.",
  },
  {
    icon: BiPalette,
    title: "UI/UX Development",
    description:
      "Clean, intuitive interfaces designed around usability, accessibility, and user experience.",
  },
  {
    icon: BiWrench,
    title: "Maintenance & Optimization",
    description:
      "Bug fixes, performance improvements, security updates, and ongoing application support.",
  },
  {
    icon: BiBulb,
    title: "Technical Consultation",
    description:
      "Practical guidance on technology, architecture, integrations, and building the right solution.",
  },
];
const Services = () => {
  return (
    <section id="services" className="services-section py-5 my-5">
      {" "}
      <Container>
        {" "}
        {/* Section Header */}{" "}
        <div className="section-title text-center mb-5">
          {" "}
          <span className="section-eyebrow">WHAT I DO</span>{" "}
          <h2>
            {" "}
            Services That <span>Deliver</span>{" "}
          </h2>{" "}
          <p>
            {" "}
            I build reliable digital solutions that solve real business
            problems, improve efficiency, and create better user
            experiences.{" "}
          </p>{" "}
        </div>{" "}
        {/* Services */}{" "}
        <Row className="g-4">
          {" "}
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Col
                xl={3}
                lg={4}
                md={6}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {" "}
                <div className="service-card h-100">
                  {" "}
                  {/* Icon */}{" "}
                  <div className="service-icon">
                    {" "}
                    <Icon />{" "}
                  </div>{" "}
                  {/* Number */}{" "}
                  <span className="service-number"> 0{index + 1} </span>{" "}
                  {/* Content */} <h4>{service.title}</h4>{" "}
                  <p>{service.description}</p> {/* Arrow */}{" "}
                  <div className="service-arrow">
                    {" "}
                    <BiRightArrowAlt />{" "}
                  </div>{" "}
                </div>{" "}
              </Col>
            );
          })}{" "}
        </Row>{" "}
      </Container>{" "}
    </section>
  );
};
export default Services;

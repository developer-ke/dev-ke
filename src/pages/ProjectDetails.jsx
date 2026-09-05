import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { BiChevronLeft, BiCodeAlt, BiCheckCircle } from "react-icons/bi";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-details py-5">
        <Container>
          <div className="project-not-found text-center">
            <h2>Project Not Found</h2>
            <p className="text-muted">
              The project you're looking for doesn't exist or may have been
              removed.
            </p>

            <Link to="/portfolio" className="btn btn-primary mt-3">
              <BiChevronLeft className="me-1" />
              Back to Portfolio
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="project-details py-5">
      <Container>
        {/* Back Button */}
        <div className="mb-4">
          <Link to="/portfolio" className="project-back-link">
            <BiChevronLeft />
            Back to Portfolio
          </Link>
        </div>

        {/* Project Header */}
        <div className="project-header mb-5">
          <span className="project-category">{project.category}</span>

          <h1>{project.title}</h1>

          <p className="project-description">{project.description}</p>
        </div>

        <Row className="g-4">
          {/* Main Content */}
          <Col lg={8}>
            {/* Overview */}
            <div className="project-section">
              <div className="project-section-title">
                <BiCodeAlt />
                <h4>Project Overview</h4>
              </div>

              <p>{project.description}</p>
            </div>

            {/* Features */}
            <div className="project-section">
              <div className="project-section-title">
                <BiCheckCircle />
                <h4>Key Features</h4>
              </div>

              <div className="project-features">
                {project.features?.map((feature, index) => (
                  <div className="feature-item" key={index}>
                    <BiCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Project Information */}
          <Col lg={4}>
            <div className="project-info-card">
              <h4>Project Information</h4>

              <div className="info-item">
                <span>Category</span>
                <strong>{project.category}</strong>
              </div>

              <div className="info-item">
                <span>Technologies</span>

                <div className="technology-list">
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className="technology-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetails;

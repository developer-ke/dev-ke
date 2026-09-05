import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="portfolio-section py-5 bg-light my-5">
      <Container>
        {/* Section Header */}
        <div className="section-title text-center mb-5">
          <h2>Portfolio</h2>
          <p>
            A curated showcase of my work as a full-stack developer, featuring
            web applications, business systems, APIs, and digital solutions
            built with modern technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="portfolio-filters text-center mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${
                filter === category ? "btn-primary" : "btn-outline-secondary"
              } mx-1 mb-2`}
              onClick={() => setFilter(category)}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <Row>
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <Card className="portfolio-card h-100 border-0 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="badge bg-primary">{project.category}</span>
                  </div>

                  {/* Title */}
                  <Card.Title className="fw-bold">{project.title}</Card.Title>

                  {/* Description */}
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="badge bg-light text-dark border"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 4 && (
                      <span className="badge bg-secondary">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Details Button */}
                  <div className="mt-auto">
                    <Link
                      to={`/project/${project.slug}`}
                      className="btn btn-primary w-100"
                    >
                      View Project
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

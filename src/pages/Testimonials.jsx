import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section py-5 bg-light">
      <Container>
        {/* Section Header */}
        <div className="section-title text-center mb-5">
          <h2>
            What People <span>Say</span>
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Feedback from clients and collaborators who have trusted me to build
            reliable, scalable, and high-quality digital solutions.
          </p>
        </div>

        {/* Testimonials */}
        <Row className="g-4 justify-content-center">
          {testimonials.map((testimonial) => (
            <Col lg={4} md={6} key={testimonial.id}>
              <div className="testimonial-card h-100">
                {/* Quote Icon */}
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>

                {/* Stars */}
                <div className="testimonial-stars mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="testimonial-text">{testimonial.text}</p>

                {/* Reviewer */}
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name
                      .split(" ")
                      .map((name) => name[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>

                  <div>
                    <h6>{testimonial.name}</h6>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

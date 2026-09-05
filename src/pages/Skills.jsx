import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { BiCheckCircle } from "react-icons/bi";
import { skills } from "../data/skills";

const Skills = () => {
  const renderSkillGroup = (title, skillList) => {
    return (
      <div className="skill-group mb-5">
        <div className="skill-group-header">
          <h4>{title}</h4>
          <span>{skillList.length} Skills</span>
        </div>

        <Row className="g-4">
          {skillList.map((skill, index) => (
            <Col lg={6} key={index}>
              <div
                className="skill-card"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <div className="skill-card-top">
                  <div className="skill-name">
                    <div className="skill-check">
                      <BiCheckCircle />
                    </div>

                    <span>{skill.name}</span>
                  </div>

                  <span className="skill-level">{skill.level}%</span>
                </div>

                <ProgressBar now={skill.level} className="skill-progress" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        {/* Section Header */}
        <div className="section-title text-center mb-5">
          <span className="section-eyebrow">MY EXPERTISE</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies and tools I use to build reliable, scalable, and
            user-focused digital solutions.
          </p>
        </div>

        {/* Skill Groups */}
        {renderSkillGroup("Core Technologies", skills.core)}

        {renderSkillGroup("Frameworks & Libraries", skills.frameworks)}

        {renderSkillGroup("Supporting Skills", skills.supporting)}
      </Container>
    </section>
  );
};

export default Skills;

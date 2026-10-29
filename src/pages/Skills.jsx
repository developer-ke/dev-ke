import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { BiCheckCircle } from "react-icons/bi";
import { skills } from "../data/skills";

const skillGroupTitles = {
  core: "Core Technologies",
  backend: "Backend Development",
  frontend: "Frontend Development",
  frameworks: "Frameworks & Libraries",
  databases: "Databases & Data Management",
  integrations: "API & System Integrations",
  security: "Security & Access Control",
  systems: "Enterprise & Business Systems",
  uiComponents: "UI Components & Data Presentation",
  engineering: "Software Engineering & Architecture",
  devops: "DevOps & Deployment",
  testing: "Testing & Quality Assurance",
  marketing: "SEO & Digital Marketing",
  tools: "Development Tools & Productivity",
  support: "IT Support & Operations",
  supporting: "Additional Skills",
};

const Skills = () => {
  const skillGroups = Object.entries(skills).filter(
    ([, skillList]) => Array.isArray(skillList) && skillList.length > 0,
  );

  const totalSkills = skillGroups.reduce(
    (total, [, skillList]) => total + skillList.length,
    0,
  );

  const renderSkillGroup = (key, title, skillList) => (
    <div className="skill-group mb-5" key={key}>
      <div className="skill-group-header">
        <h4>{title}</h4>
        <span>
          {skillList.length} {skillList.length === 1 ? "Skill" : "Skills"}
        </span>
      </div>

      <Row className="g-4">
        {skillList.map((skill, index) => (
          <Col lg={6} key={`${key}-${skill.name}`}>
            <div
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 60}
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

              <ProgressBar
                now={Math.min(100, Math.max(0, skill.level))}
                className="skill-progress"
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <div className="section-title text-center my-5">
          <span className="section-eyebrow hero-availability">
            MY EXPERTISE
          </span>
          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies, frameworks, and tools I use to build reliable,
            scalable, and user-focused digital solutions.
          </p>

          <div className="skills-summary">
            <span>
              <strong>{totalSkills}+</strong> Skills & Technologies
            </span>
            <span>
              <strong>{skillGroups.length}</strong> Categories
            </span>
          </div>
        </div>

        {skillGroups.map(([key, skillList]) =>
          renderSkillGroup(
            key,
            skillGroupTitles[key] ||
              key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1"),
            skillList,
          ),
        )}
      </Container>
    </section>
  );
};

export default Skills;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import {
  BiCheckCircle,
  BiCodeAlt,
  BiServer,
  BiLayout,
  BiLayer,
  BiData,
  BiPlug,
  BiShield,
  BiBriefcase,
  BiPalette,
  BiGitBranch,
  BiCheckShield,
  BiTrendingUp,
  BiWrench,
  BiSupport,
  BiGridAlt,
  BiChevronRight,
} from "react-icons/bi";

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

const categoryIcons = {
  core: BiCodeAlt,
  backend: BiServer,
  frontend: BiLayout,
  frameworks: BiLayer,
  databases: BiData,
  integrations: BiPlug,
  security: BiShield,
  systems: BiBriefcase,
  uiComponents: BiPalette,
  engineering: BiGitBranch,
  devops: BiWrench,
  testing: BiCheckShield,
  marketing: BiTrendingUp,
  tools: BiWrench,
  support: BiSupport,
  supporting: BiGridAlt,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillGroups = Object.entries(skills).filter(
    ([, skillList]) => Array.isArray(skillList) && skillList.length > 0,
  );

  const totalSkills = skillGroups.reduce(
    (total, [, skillList]) => total + skillList.length,
    0,
  );

  useEffect(() => {
    const sections = skillGroups
      .map(([key]) => document.getElementById(`skill-${key}`))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveCategory(visible[0].target.id.replace("skill-", ""));
        }
      },
      {
        rootMargin: "-110px 0px -65% 0px",
        threshold: [0, 0.15, 0.3, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [skillGroups.length]);

  const scrollToCategory = (key) => {
    if (key === "all") {
      setActiveCategory("all");
      window.scrollTo({
        top: document.getElementById("skills")?.offsetTop ?? 0,
        behavior: "smooth",
      });
      return;
    }

    setActiveCategory(key);

    document.getElementById(`skill-${key}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const renderSkillGroup = (key, skillList) => {
    const title =
      skillGroupTitles[key] ||
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");

    const Icon = categoryIcons[key] || BiGridAlt;

    return (
      <div className="skill-group mb-5" id={`skill-${key}`} key={key}>
        <div className="skill-group-header">
          <div className="skill-group-heading">
            <div className="skill-category-icon">
              <Icon />
            </div>

            <h4>{title}</h4>
          </div>

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
                  aria-label={`${skill.name} proficiency`}
                />
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

        {/* Category navigation */}
        <nav className="skills-category-nav" aria-label="Skill categories">
          <div className="skills-category-nav-inner">
            <button
              type="button"
              className={`skill-category-link ${
                activeCategory === "all" ? "active" : ""
              }`}
              onClick={() => scrollToCategory("all")}
            >
              <BiGridAlt />
              <span>All Skills</span>
              <span className="category-count">{totalSkills}</span>
            </button>

            {skillGroups.map(([key, skillList]) => {
              const Icon = categoryIcons[key] || BiGridAlt;
              const title =
                skillGroupTitles[key] ||
                key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1");

              return (
                <button
                  type="button"
                  key={key}
                  className={`skill-category-link ${
                    activeCategory === key ? "active" : ""
                  }`}
                  onClick={() => scrollToCategory(key)}
                  aria-current={activeCategory === key ? "location" : undefined}
                >
                  <Icon />
                  <span>{title}</span>
                  <span className="category-count">{skillList.length}</span>
                  <BiChevronRight className="category-arrow" />
                </button>
              );
            })}
          </div>
        </nav>

        {/* Skill categories */}
        <div className="skills-groups">
          {skillGroups.map(([key, skillList]) =>
            renderSkillGroup(key, skillList),
          )}
        </div>
      </Container>
    </section>
  );
};

export default Skills;

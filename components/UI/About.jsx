import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import { motion } from "framer-motion";

import img01 from "/public/images/img-01.webp";
import img02 from "/public/images/img-02.webp";
import img03 from "/public/images/img-03.webp";
import img04 from "/public/images/hero.webp";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Domains I have worked on : <br />
              - &nbsp;Design Systems <br />
              - &nbsp;Business webapps <br />
              - &nbsp;Service Now - Portal <br />
              - &nbsp;Salesforce Lightning <br />
              - &nbsp;Custom and Dynamic website <br />
              - &nbsp;SaaS product <br />

              I will work with you to discover what you need and create the best solution. <br />
              My priorities are delivering quality work and respect for deadlines.<br />
              I love to share my enthusiasm and passion for development, so feel free to contact me,
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality Code
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="#">Download CV</Link>
              </button>
            </div>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <motion.div
                  whileHover={{ scale: 1.2, transition: { duration: 1 }, }}
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image loading="lazy" src={img01} alt="about-img" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2, transition: { duration: 1 }, }}
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image loading="lazy" src={img02} alt="about-img" />
                </motion.div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <motion.div
                  whileHover={{ scale: 1.2, transition: { duration: 1 }, }}
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image loading="lazy" src={img03} alt="about-img" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                  transition={0.2}
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image loading="lazy" src={img04} alt="about-img" />
                </motion.div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

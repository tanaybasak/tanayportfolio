import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.webp";
import classes from "../../styles/hero.module.css";

const Hero = () => {

  const [text, count] = useTypewriter({
    words: ["Hi I am Tanoy...", "GuyWhoTravels.tsx", "<ButLovesToCode />"],
    loop: true,
    delaySpeed: 2000,
  });

  const onDownloadClick = () => {
    // using Java Script method to get PDF file
    fetch('/TanoyBasakResume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'TanoyBasakResume.pdf';
        alink.click();
      })
    })
  }
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#f7abba"></Cursor>
              </h2>
              <h5 className="mb-4">Javascript Engineer</h5>
              <p>
                A frontend engineer passionate <br />  for developing engaging UI & bringing products to life.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href={'#'} legacyBehavior><span onClick={onDownloadClick} style={{ color: '#01d293' }}> Download Resume </span></Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image loading="lazy" alt="hero-image" src={heroImg} width="300" height="450" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

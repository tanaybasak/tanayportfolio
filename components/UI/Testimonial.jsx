import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import graphql from "../../public/images/graphql.png";
import docker from "../../public/images/docker.png";
import ts from "../../public/images/typescript.svg";
import servicenow from "../../public/images/servicenow.png";
import angular from "../../public/images/angular.svg";
import d3 from "../../public/images/d3.png";
import redux from "../../public/images/redux.png";
import npm from "../../public/images/npm.webp";
import webpack from "../../public/images/webpack.webp";
import js from '../../public/images/js.png';
import node from '../../public/images/node.webp';
import react from '../../public/images/react.png';
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Skills" />
            <h4 className="mt-4 mb-5">What I do</h4>

            {/* <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Jhon Doe</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Henry Nichols</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Adam Smith</h6>
                    <h6>Financial Accountant</h6>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>
            </Slider> */}
            <div className={`${classes.grid__container}`}>
                <div className="grid-item">
                  <Image alt="network-img" src={js} width="80" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={graphql} width="80" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={node} width="80" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={react} width="100" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={docker} width="100" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={d3} width="100" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={ts} width="100" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={angular} width="100" height="80" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={webpack} width="100" height="100" />
                </div>
             
                <div className="grid-item">
                  <Image alt="network-img" src={npm} width="100" height="100" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={servicenow} width="100" height="100" />
                </div>
                <div className="grid-item">
                  <Image alt="network-img" src={redux} width="100" height="80" />
                </div>
                
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;

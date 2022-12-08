import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const defaultContent = `A Frontend engineer with 5+ years of experience specializing in <span style="color: yellow"> wireframing, prototyping and web development</span>. Adept at building high-quality code and developing innovative web applications to make things look cool over web`

const web = `I specialize in <span style="color: yellow"> REACT-REDUX </span> framework to develop responsive applications along with optimized web performance. I have developed applications for multiple MNC's and provided end-to-end solutions to cater requirements within short frame of time`;
const app = `Contributed in containerization of applications using  <span style="color: yellow">Docker </span> and  <span style="color: yellow">k8s </span> on cloud`;
const fullStack = `I specialize in <span style="color: yellow"> NODEJS </span> framework along with <span style="color: yellow"> GRAPHQL </span> to develop <span style="color: yellow"> MEAN </span> stack applications which cut latency by 40% and increased effectiveness of database administrators by 20%`;


const Services = () => {
  const wrapperRef = useRef(null);
  const [content, setContent] = useState(defaultContent);
  const onHandleServices = (dev) => {
    if (dev == 'App Deployment') {
      setContent(app)
    }
    else if (dev == 'Web Development') {
      setContent(web);
    }
    else {
      setContent(fullStack)
    }
  }


  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setContent(defaultContent);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <section id="services" >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`} ref={wrapperRef}>
              <div>
                <ServicesItem title="App Deployment" handleServices={() => onHandleServices('App Deployment')} icon="ri-apps-line" />

                <ServicesItem title="Web Development" handleServices={() => onHandleServices('Web Development')} icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
                handleServices={() => onHandleServices('Full-Stack Development')}
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Development,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

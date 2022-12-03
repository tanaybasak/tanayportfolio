import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const defaultContent =  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet culpa nobis corporis officiis, numquam cupiditate, enim expedita
eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
Veniam, non distinctio dolorem rerum laboriosam deleniti.`

const web = `web`;
const app = `Deployment`;
const fullStack = `Full Stack`;


const Services = () => {
 const wrapperRef = useRef(null);
 const [content, setContent] = useState(defaultContent);
 const  onHandleServices = (dev) => {
    if(dev == 'App Deployment') {
      setContent(web)
    }
    else if(dev == 'Web Development') {
      setContent(app);
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
            <p>
              {content}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

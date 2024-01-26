import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Title, Text, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <Availability />
              <div className="text-center my-5">
                <Title>Do you have illustration project? Let's talk.</Title>
              </div>
              <div className="text-center">
                <ButtonIcon>Let's Talk Now</ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;

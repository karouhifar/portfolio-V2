import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Button } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <Box
                className="d-flex flex-column align-items-center text-center"
                pt={5}
              >
                <Title variant="hero" mb="2rem">
                  Design solutions
                </Title>
                <Text
                  color="heading"
                  css={`
                    line-height: 1.5;
                  `}
                  mb="2.5rem"
                >
                  I create meaningful solutions for your brands and products.
                  <br />
                  Give your customers the best experience possible.
                </Text>
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  <Button variant="success" arrowRight>
                    Explore works
                  </Button>
                </Link>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

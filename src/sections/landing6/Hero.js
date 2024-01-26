import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  ButtonOutline,
} from "../../components/Core";

import { device } from "../../utils";
import bgHeroPattern from "../../assets/image/webp/hero-pattern-2.webp";
import imgL from "../../assets/image/png/portrait-2.png";

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

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight src={imgL} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box pl={[0, null, null, "3.125rem"]}>
                <Title mb="2rem">A full-service innovative agency</Title>

                <Text
                  color="dark"
                  css={`
                    line-height: 1.5;
                  `}
                  mb="2.5rem"
                >
                  I create meaningful solutions for your brands and products.
                  <br />
                  Give your customers the best experience possible.
                </Text>

                <Box>
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <ButtonOutline>Check Latest Works</ButtonOutline>
                  </Link>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

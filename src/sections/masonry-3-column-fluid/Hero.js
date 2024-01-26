import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Title, Section, Box, Text, ButtonIcon } from "../../components/Core";

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
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7">
              <Box mt={5}>
                <Title>We solve your digital photography problem.</Title>
                <Text pb="1.875rem" pt="1.25rem" color="heading">
                  Looking for a group of photographers for your product
                  promotion? <br />
                  Our professional photographers are here to solve it.
                </Text>
                <Box>
                  <ButtonIcon
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleContact();
                    }}
                  >
                    Lets talk
                  </ButtonIcon>
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

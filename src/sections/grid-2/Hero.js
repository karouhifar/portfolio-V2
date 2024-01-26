import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

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
          <Box
            className="d-flex flex-column align-items-center text-center"
            pt={5}
          >
            <Text
              variant="tag"
              mb={4}
              className="text-uppercase"
              color="heading"
              mb="40px"
            >
              ONE STEP AHEAD TOWARDS SOLUTIONS
            </Text>

            <Title variant="hero" mb="3rem">
              DESIGN. CODE. LIVE!
            </Title>
            <ButtonIcon
              onClick={(e) => {
                e.preventDefault();
                gContext.toggleContact();
              }}
            >
              Let's Discuss
            </ButtonIcon>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

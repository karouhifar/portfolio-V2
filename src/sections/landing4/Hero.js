import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Section, Box, Text, Button } from "../../components/Core";
import IconCircle from "../../components/IconCircle";

import bgHero from "../../assets/image/png/dev-bg.png";

const SectionStyled = styled(Section)`
  &::before {
    opacity: 0.085;
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: url(${bgHero}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled
        hero
        className="position-relative"
        pt={["50px", null, "75px", "100px"]}
        pb={["100px", null, "150px", "200px"]}
      >
        <Container>
          <Box className="d-flex flex-column align-items-center text-center">
            <IconCircle mb="2.5rem">
              <i className="icon icon-code-2"></i>
            </IconCircle>

            <Title variant="hero" mb="1.5rem">
              Code. Eat. Sleep.
            </Title>
            <Text
              color="text"
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
              <Button>Check latest works</Button>
            </Link>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

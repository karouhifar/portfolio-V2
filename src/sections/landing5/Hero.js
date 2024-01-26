import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Section, Box, Button } from "../../components/Core";

import bgHeroPattern from "../../assets/image/webp/hero-pattern-2.webp";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: -80px;
    content: "";
    width: 100%;
    height: 100%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box
            pt={["60px", null, "80px", "130px"]}
            pb={["40px", null, "60px", "80px"]}
          >
            <Box className="d-flex flex-column align-items-center text-center">
              <Title
                color="light"
                variant="card"
                mb="2.5rem"
                css={`
                  font-size: 1.3125rem;
                  line-height: 1.5;
                  font-weight: 400;
                `}
              >
                Best digital design agency in New York ⚡
              </Title>

              <Title color="light" variant="hero" mb="3.75rem">
                We create solutions <br /> for your brands
              </Title>
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
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

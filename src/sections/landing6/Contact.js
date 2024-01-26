import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Box, Title, Button } from "../../components/Core";
import IconCircle from "../../components/IconCircle";
import bgFooter from "../../assets/image/png/subscribe-pattern.png";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    bottom: -150px;
    content: "";
    width: 120%;
    height: 150%;
    background: url(${bgFooter}) bottom center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <SectionStyled className="position-relative">
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <Box className="text-center d-flex flex-c justify-content-center align-items-center">
                <IconCircle bg="#F5E9B4" color="dark">
                  <i className="icon icon-chat-round-2"></i>
                </IconCircle>
              </Box>
              <div className="text-center my-5">
                <Title variant="secSm">
                  Looking for a team to start? You are at the right place.
                </Title>
              </div>
              <div className="text-center">
                <Button
                  variant="success"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Talk Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

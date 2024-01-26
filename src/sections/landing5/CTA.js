import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
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
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <SectionStyled className="position-relative">
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="11" xl="10">
              <div className="text-center mb-5">
                <Title color="light" variant="secSm">
                  We are taking new projects. Waiting to hearing from you, so if
                  you'd like to chat please get in touch.
                </Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Talk Now
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;

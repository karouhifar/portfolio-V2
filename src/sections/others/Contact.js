import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../components/Core";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 3rem;
  @media ${device.lg} {
    margin-top: 250px;
  }
`;

const Contact = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title color="light" variant="secSm" mb="2rem">
                  Contact now
                </Title>
                <Text color="light" mb="2.75rem">
                  Have a project or question? Send me a message. I will reply
                  within 48 hours.
                </Text>
                <ContactForm theme="dark" />
              </Box>
            </Col>
            <Col lg="5">
              <ContactCard className="p-5 ml-lg-5">
                <div>
                  <Text color="light">Email me at</Text>

                  <a href="mailto:hello@folio.com" className="font-weight-bold">
                    <Span color="primary">hello@folio.com</Span>
                  </a>
                </div>
                <div className="mt-5">
                  <Text color="light">Call me at</Text>

                  <div>
                    <a href="tel:+1-402-4983" className="font-weight-bold">
                      <Span color="primary">+1-402-4983</Span>
                    </a>
                  </div>
                </div>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;

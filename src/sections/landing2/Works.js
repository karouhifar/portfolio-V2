import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import {
  Title,
  Section,
  Box,
  Text,
  ButtonOutline,
} from "../../components/Core";
import RotateImg from "../../components/RotateImg";
import { designWorks2 } from "../../data";
import { useWindowSize } from "../../hooks";
import { breakpoints } from "../../utils";

const WorkCard = styled(Box)``;
const WorkText = styled(Box)``;

const Grid = (props) => {
  const size = useWindowSize();

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return size.width < breakpoints.lg ? (
    <Masonry
      options={masonryOptions}
      className={"masonry-grid row"}
      {...props}
    />
  ) : (
    <Row {...props} />
  );
};

const Works = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(designWorks2);
  }, []);

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Grid>
            {items.map((item, index) => (
              <Col
                lg={item.halfWidth ? 6 : 4}
                md="6"
                sm="6"
                key={index}
                className="filtr-item"
              >
                <WorkCard className="position-relative" mb="30px">
                  <RotateImg
                    link="/portfolio-details"
                    imgSrc={item.thumbnail}
                  />
                  <Box pt="2.125rem">
                    <WorkText className="overflow-hidden text-center">
                      <Text variant="tag" mb="0.5rem">
                        {item.categories[0]}
                      </Text>
                      <Title variant="cardLg">
                        <Link to="/portfolio-details">{item.brand} </Link>
                      </Title>
                    </WorkText>
                  </Box>
                </WorkCard>
              </Col>
            ))}
          </Grid>
          <Box pt="3rem" className="text-center">
            <ButtonOutline>Load more works</ButtonOutline>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Works;

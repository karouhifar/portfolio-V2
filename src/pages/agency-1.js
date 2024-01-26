import React from "react";
import { Element } from "react-scroll";

import { Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing5/Hero";
import Works from "../sections/landing5/Works";
import CTA from "../sections/landing5/CTA";

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box bg="info">
          <Hero />
          <Element name="works">
            <Works />
          </Element>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default IndexPage;

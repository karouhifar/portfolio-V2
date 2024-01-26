import React from "react";
import { Element } from "react-scroll";
import { Box } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing6/Hero";
import Works from "../sections/landing6/Works";
import Contact from "../sections/landing6/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box>
          <Hero />
          <Element name="works">
            <Works />
          </Element>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default IndexPage;

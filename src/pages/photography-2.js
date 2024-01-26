import React from "react";
import { Box } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing8/Hero";
import Works from "../sections/landing8/Works";
import Contact from "../sections/landing8/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box>
          <Hero />
          <Works />
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default IndexPage;

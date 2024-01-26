import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Box } from "../components/Core";
import About from "../sections/others/About";

const AboutPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Box pt={4}>
          <About />
        </Box>
      </PageWrapper>
    </>
  );
};

export default AboutPage;

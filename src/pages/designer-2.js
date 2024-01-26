import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing2/Hero";
import Works from "../sections/landing2/Works";
import CTA from "../sections/landing2/CTA";

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Hero />
        <Works />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

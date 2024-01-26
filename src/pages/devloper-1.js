import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing3/Hero";
import Works from "../sections/landing3/Works";
import Contact from "../sections/landing3/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Works />
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/grid-2/Hero";
import Works from "../sections/grid-2/Works";
import Contact from "../sections/common/Contact";

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

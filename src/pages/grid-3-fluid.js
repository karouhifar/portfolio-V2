import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/grid-3-fluid/Hero";
import Works from "../sections/grid-3-fluid/Works";
import Contact from "../sections/common/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

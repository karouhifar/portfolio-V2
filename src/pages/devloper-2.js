import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing4/Hero";
import Works from "../sections/landing4/Works";
import CTA from "../sections/landing4/CTA";

const IndexPage = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Hero />
        <Element name="works">
          <Works />
        </Element>
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

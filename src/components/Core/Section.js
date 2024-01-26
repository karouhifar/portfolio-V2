import React from "react";
import Box from "./Box";

const Section = ({ hero, children, ...rest }) => {
  return (
    <Box py={["50px", null, "75px", "100px"]} {...rest}>
      {hero && <Box mt={["50px", null, "65px", "85px"]}></Box>}
      {children}
    </Box>
  );
};

export default Section;

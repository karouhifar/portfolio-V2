import React from "react";
import styled from "styled-components";

import { Box, Text } from "../../components/Core";

const AvailableCircle = styled(Box)`
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

const Hero = ({ className = "justify-content-center", ...rest }) => {
  return (
    <>
      <Box className={`d-flex align-items-center ${className}`} {...rest}>
        <AvailableCircle className="bg-success" mr="13px" />
        <Text variant="tag" className="text-uppercase" color="heading">
          AVAILABLE FOR FREELANCE PROJECTS
        </Text>
      </Box>
    </>
  );
};

export default Hero;

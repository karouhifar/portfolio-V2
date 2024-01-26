import React from "react";
import { Box } from "../Core";

const IconCircle = ({ bg = "success", color = "#fff", children, ...rest }) => (
  <Box
    bg={bg}
    color={color}
    px="1.875rem"
    py="1.25rem"
    borderRadius="50rem"
    css={`
      text-align: center;
      .icon {
        font-weight: bolder;
        font-size: 2rem !important;
        letter-spacing: -1.2px;
        line-height: 1.375 !important;
      }
    `}
    {...rest}
  >
    {children}
  </Box>
);

export default IconCircle;

import React from "react";
import { Box, Button } from "../Core";

const ButtonIcon = ({
  variant = "success",
  color = "#fff",
  children,
  ...rest
}) => {
  return (
    <Button variant={variant} color={color} {...rest}>
      <Box
        css={`
          font-size: 1.1875rem;
          padding-right: 1.25rem;
          display: flex;
        `}
      >
        <i className="icon icon-chat-round-2" />
      </Box>
      {children}
    </Button>
  );
};

export default ButtonIcon;

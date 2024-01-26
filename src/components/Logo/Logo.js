import React from "react";
import { Link } from "gatsby";
import { Title } from "../Core";

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <Title color={color} variant="cardLg" className="mb-0">
        folio.
      </Title>
    </Link>
  );
};

export default Logo;

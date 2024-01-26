import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";

const SectionTitle = styled.h2`
  font-weight: 700;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 0;

  @media ${device.sm} {
    font-size: 50px;
    line-height: 62px;
  }

  @media ${device.lg} {
    font-size: 60px;
    line-height: 70px;
  }

  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const SectionSm = styled(SectionTitle)`
  letter-spacing: -1.15px;
  font-size: 2.125rem;
  line-height: 1.115;

  @media ${device.sm} {
    font-size: 2.5rem;
    line-height: 1.225;
    letter-spacing: -1.8px;
  }

  @media ${device.lg} {
    font-size: 3rem;

    line-height: 1.25;
  }

  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const HeroTitle = styled(SectionTitle)`
  letter-spacing: -2.81px;
  font-size: 50px;
  line-height: 56px;

  @media ${device.sm} {
    font-size: 66px;
    line-height: 70px;
  }

  @media ${device.lg} {
    font-size: 76px;
    line-height: 84px;
  }

  @media ${device.xl} {
    font-size: 80px;
    line-height: 84px;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.3125rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const CardTitleSm = styled(CardTitle)`
  font-size: 1.0625rem;
  letter-spacing: -0.2px;
  line-height: 1;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const CardTitleLg = styled(CardTitle)`
  font-size: 1.5rem;
  line-height: 1.42;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const CardTitleBig = styled(CardTitle)`
  font-size: 1.5rem;
  @media ${device.lg} {
    font-size: 2rem;
  }
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Title = ({ variant, ...rest }) => {
  let TitleStyled = SectionTitle;

  switch (variant) {
    case "card":
      TitleStyled = CardTitle;
      break;
    case "cardSm":
      TitleStyled = CardTitleSm;
      break;
    case "cardLg":
      TitleStyled = CardTitleLg;
      break;
    case "cardBig":
      TitleStyled = CardTitleBig;
      break;
    case "hero":
      TitleStyled = HeroTitle;
      break;
    case "secSm":
      TitleStyled = SectionSm;
      break;
    default:
      TitleStyled = SectionTitle;
  }

  return <TitleStyled color="heading" {...rest} />;
};

export default Title;

import styled from "styled-components";

const LinkStyled = styled.a`
  color: ${({ theme }) => theme.colors.primary} !important;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.75rem 0;
  font-size: 0.8125rem;
  line-height: 1.63;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    transform: translateY(-10px);
  }
  & + .divider {
    display: inline-flex;
    padding: 0.75rem 0;
    color: ${({ theme }) => theme.colors.frontShade} !important;
    opacity: 0.25;
  }
`;

export default LinkStyled;

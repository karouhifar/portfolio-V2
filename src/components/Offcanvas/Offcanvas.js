import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../Logo";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-out;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

const Drawer = styled.div`
  position: fixed;
  width: 20rem;
  max-width: 100vw;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 999999;
  background: #fff;
  overflow-y: auto;
  transform: translateX(0);
  transition: all 0.3s ease-out;
  &.hidden {
    transform: translateX(100%);
  }
  .dropdown-menu {
    position: static !important;
    will-change: initial !important;
    transform: initial !important;
    float: none !important;
  }
`;

const LogoContainer = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
  color: ${({ theme }) => theme.colors.dark};
`;

const CloseButton = (props) => (
  <CloseWrapper {...props}>
    <svg
      role="img"
      viewBox="0 0 24 24"
      css={`
        fill: ${({ theme }) => theme.colors.dark};
        vertical-align: middle;
        height: 1rem;
        width: 1rem;
      `}
    >
      <path
        d="M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z"
        css={`
          fill: ${({ theme }) => theme.colors.dark};
        `}
      ></path>
    </svg>
  </CloseWrapper>
);

const Offcanvas = ({ show, onHideOffcanvas, children, ...rest }) => {
  if (typeof document !== "undefined") {
    if (show) {
      document.querySelector("html").classList.add("has-offcanvas");
      document.body.classList.add("has-offcanvas");
    } else {
      document.querySelector("html").classList.remove("has-offcanvas");
      document.body.classList.remove("has-offcanvas");
    }
  }

  return (
    <div {...rest}>
      <Overlay className={show ? "" : "hidden"} onClick={onHideOffcanvas} />
      <Drawer className={show ? "" : "hidden"}>
        <Container>
          <div className="p-3">
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <LogoContainer>
                <Logo onClick={onHideOffcanvas} />
              </LogoContainer>
              <CloseButton onClick={onHideOffcanvas} />
            </div>

            <div className="pt-4">{children}</div>
          </div>
        </Container>
      </Drawer>
    </div>
  );
};

export default Offcanvas;

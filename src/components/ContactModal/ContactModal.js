import React, { useContext } from "react";
import styled from "styled-components";
import { Modal, Container } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Contact from "../../sections/others/Contact";
import Logo from "../Logo";

import { device } from "../../utils";

const ModalStyled = styled(Modal)`
  &.modal {
    padding-left: 0 !important;
    /* background: ${({ theme }) => theme.colors.bg}; */
  }
  .modal-dialog {
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
  }
  .modal-body {
    padding: 0;
  }
  .modal-content {
    min-width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.dark};
    border: none;
    border-radius: 0;
    padding: 0;
    @media ${device.lg} {
      padding: 0;
    }
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(7px);
      z-index: -1;
    }
  }
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
  color: ${({ theme }) => theme.colors.light};
`;

const CloseButton = (props) => (
  <CloseWrapper {...props}>
    <svg
      role="img"
      viewBox="0 0 24 24"
      css={`
        fill: ${({ theme }) => theme.colors.light};
        vertical-align: middle;
        height: 1rem;
        width: 1rem;
      `}
    >
      <path
        d="M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z"
        css={`
          fill: ${({ theme }) => theme.colors.light};
        `}
      ></path>
    </svg>
  </CloseWrapper>
);

const ContactModal = (props) => {
  const gContext = useContext(GlobalContext);

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.contactVisible}
      onHide={gContext.toggleContact}
    >
      <Modal.Body className="position-relative ">
        <Container fluid className="px-sm-5 py-2">
          <div className="d-flex justify-content-between py-3">
            <Logo color="light" />
            <CloseButton onClick={gContext.toggleContact} />
          </div>
        </Container>
        <Contact hero={false} />
      </Modal.Body>
    </ModalStyled>
  );
};

export default ContactModal;
